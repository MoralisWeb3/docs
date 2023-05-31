import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@site/src/components/ui/card";
import { Badge } from "@site/src/components/ui/badge";

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
      {badgeList.map((name) => (
        <Badge variant="outline">{name}</Badge>
      ))}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Guides;
