import { createHash } from "crypto";
import { config } from "dotenv";
import { ObjectExpression } from "estree";
import { readdir, readFile, stat } from "fs/promises";
import { Content, Root } from "mdast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxFromMarkdown, MdxjsEsm } from "mdast-util-mdx";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { join } from "path";
import { u } from "unist-builder";
import { filter } from "unist-util-filter";
import { inspect } from "util";

config();

const ignoredFiles = ["pages/404.mdx"];

/**
 * Extracts ES literals from an `estree` `ObjectExpression`
 * into a plain JavaScript object.
 */
function getObjectFromExpression(node: ObjectExpression) {
    return node.properties.reduce<
        Record<string, string | number | bigint | true | RegExp | undefined>
    >((object, property) => {
        if (property.type !== "Property") {
            return object;
        }

        const key = (property.key.type === "Identifier" && property.key.name) || undefined;
        const value = (property.value.type === "Literal" && property.value.value) || undefined;

        if (!key) {
            return object;
        }

        return {
            ...object,
            [key]: value,
        };
    }, {});
}

/**
 * Extracts the `meta` ESM export from the MDX file.
 *
 * This info is akin to frontmatter.
 */
function extractMetaExport(mdxTree: Root) {
    const metaExportNode = mdxTree.children.find((node): node is MdxjsEsm => {
        return (
            node.type === "mdxjsEsm" &&
            node.data?.estree?.body[0]?.type === "ExportNamedDeclaration" &&
            node.data.estree.body[0].declaration?.type === "VariableDeclaration" &&
            node.data.estree.body[0].declaration.declarations[0]?.id.type === "Identifier" &&
            node.data.estree.body[0].declaration.declarations[0].id.name === "meta"
        );
    });

    if (!metaExportNode) {
        return undefined;
    }

    const objectExpression =
        (metaExportNode.data?.estree?.body[0]?.type === "ExportNamedDeclaration" &&
            metaExportNode.data.estree.body[0].declaration?.type === "VariableDeclaration" &&
            metaExportNode.data.estree.body[0].declaration.declarations[0]?.id.type ===
                "Identifier" &&
            metaExportNode.data.estree.body[0].declaration.declarations[0].id.name === "meta" &&
            metaExportNode.data.estree.body[0].declaration.declarations[0].init?.type ===
                "ObjectExpression" &&
            metaExportNode.data.estree.body[0].declaration.declarations[0].init) ||
        undefined;

    if (!objectExpression) {
        return undefined;
    }

    return getObjectFromExpression(objectExpression);
}

/**
 * Splits a `mdast` tree into multiple trees based on
 * a predicate function. Will include the splitting node
 * at the beginning of each tree.
 *
 * Useful to split a markdown file into smaller sections.
 */
function splitTreeBy(tree: Root, predicate: (node: Content) => boolean) {
    return tree.children.reduce<Root[]>((trees, node) => {
        const [lastTree] = trees.slice(-1);

        if (!lastTree || predicate(node)) {
            const tree: Root = u("root", [node]);
            return trees.concat(tree);
        }

        lastTree.children.push(node);
        return trees;
    }, []);
}

type Meta = ReturnType<typeof extractMetaExport>;

type ProcessedMdx = {
    checksum: string;
    meta: Meta;
    sections: string[];
};

/**
 * Processes MDX content for search indexing.
 * It extracts metadata, strips it of all JSX,
 * and splits it into sub-sections based on criteria.
 */
function processMdxForSearch(content: string): ProcessedMdx {
    const checksum = createHash("sha256").update(content).digest("base64");

    const mdxTree = fromMarkdown(content, {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()],
    });

    const meta = extractMetaExport(mdxTree);

    // Remove all MDX elements from markdown
    const mdTree = filter(
        mdxTree,
        (node) =>
            !["mdxjsEsm", "mdxJsxTextElement", "mdxFlowExpression", "mdxTextExpression"].includes(
                node.type
            ) &&
            !(
                node.type === "mdxJsxFlowElement" &&
                !(
                    node?.name === "Tabs" ||
                    node?.name === "TabItem" ||
                    node?.name === "RunTheScript"
                )
            )
    );

    for (let i = 0; i < mdTree.children.length; i++) {
        const node = mdTree.children[i];
        if (node.type === "mdxJsxFlowElement") {
            if (node.name === "Tabs") {
                mdTree.children.splice(i, 1, ...node.children.map((child) => child.children[0]));
            } else if (node.name === "RunTheScript") {
                mdTree.children.splice(
                    i,
                    1,
                    ...[
                        {
                            type: "code",
                            lang: "shell",
                            value: "node index.js",
                            meta: "Shell (JavaScript)",
                        },
                        {
                            type: "code",
                            lang: "shell",
                            value: "ts-node index.ts",
                            meta: "Shell (TypeScript)",
                        },
                        {
                            type: "code",
                            lang: "shell",
                            value: "python index.py",
                            meta: "Shell (Python)",
                        },
                    ]
                );
            }
        }
    }

    if (!mdTree) {
        return {
            checksum,
            meta,
            sections: [],
        };
    }

    const sectionTrees = splitTreeBy(mdTree, (node) => node.type === "heading");

    const sections = sectionTrees.map((tree) => toMarkdown(tree));

    return {
        checksum,
        meta,
        sections,
    };
}

async function walk(dir: string): Promise<string[]> {
    const immediateFiles = await readdir(dir);

    const recursiveFiles = await Promise.all(
        immediateFiles.map(async (file) => {
            const filePath = join(dir, file);
            const stats = await stat(filePath);
            if (stats.isDirectory()) {
                return walk(filePath);
            } else if (stats.isFile()) {
                return [filePath];
            } else {
                return [];
            }
        })
    );

    const flattenedFiles = recursiveFiles.reduce(
        (all, folderContents) => all.concat(folderContents),
        []
    );

    return flattenedFiles;
}

async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

async function generateEmbeddings() {
    console.log("Embedding generation disabled - database removed");
    return;
}

async function main() {
    await generateEmbeddings();
}

main().catch((err) => console.error(err));
