import React, { useMemo } from "react";
import { Card } from "@site/src/components/ui/card";
import { Badge } from "@site/src/components/ui/badge";
import Link from "@docusaurus/Link";
import guidesList from "@site/docs/configs/guides/guides.json";
import ReactMarkdown from "react-markdown";

const Guides = () => {
  // Extract All Existing Categories from the Guides List
  const categoriesList = useMemo(() => {
    const allTags = guidesList.map(({ data }) => {
      return data.tags;
    });

    const flattenedArray = allTags.reduce((a, b) => a.concat(b), []);

    return flattenedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }, [guidesList]);

  const filteredGuidesList = useMemo(() => {
    return guidesList.filter(({ data }) => {
      const { tags } = data ?? {};
      return tags.includes("NFT API");
    });
  }, [guidesList]);

  return (
    <>
      <div className="container">
        <div className="row">
          {categoriesList.map((name) => (
            <Badge variant="outline" className="cursor-pointer mr-3 mb-3">
              {name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-1 mt-4">
        {filteredGuidesList.map(({ data }) => {
          const { title, slug, description, tags } = data ?? {};
          return (
            <Card>
              <div className="flex flex-col justify-between p-6 h-full">
                <div className="grid gap-2 grid-rows-1">
                  <h2 className="m-0">{title}</h2>
                  <div>
                    {tags.map((name) => (
                      <Badge variant="outline" className="cursor-pointer mr-3">
                        {name}
                      </Badge>
                    ))}
                  </div>
                  <ReactMarkdown>{description}</ReactMarkdown>
                </div>
                <div>
                  <Link href={slug}>Read More</Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Guides;
