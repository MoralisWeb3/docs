import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@site/src/components/ui/card";
import { Badge } from "@site/src/components/ui/badge";
import Link from "@docusaurus/Link";
import guidesList from "@site/docs/configs/guides/guides.json";
import ReactMarkdown from "react-markdown";

const badgeList = [
  "NFT API",
  "Token API",
  "Streams",
  "Block API",
  "Transaction API",
  "Events API",
];

const Guides = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {badgeList.map((name) => (
            <Badge variant="outline" className="cursor-pointer mr-3">
              {name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 mt-4">
        {guidesList.map(({ data }) => {
          const { title, slug, description } = data ?? {};
          return (
            <Card>
              <CardHeader>
                <h2>{title}</h2>
              </CardHeader>
              <CardContent>
                <ReactMarkdown>{description}</ReactMarkdown>
              </CardContent>
              <CardFooter>
                <Link href={slug}>Read More</Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Guides;
