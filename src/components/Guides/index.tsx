import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@site/src/components/ui/card";
import { Badge } from "@site/src/components/ui/badge";
import Link from "@docusaurus/Link";

const badgeList = [
  "NFT API",
  "Token API",
  "Streams",
  "Block API",
  "Transaction API",
  "Events API",
];

const guidesList = [
  {
    title: "Automated Blockchain Telegram Bot",
    link: "/guides/automated-blockchain-telegram-bot",
  },
  {
    title: "Blockchain Discord Bot",
    link: "/guides/blockchain-discord-bot",
  },
  {
    title: "Live Crypto Notifications",
    link: "/guides/live-crypto-notifications",
  },
  {
    title: "Token Gating Website (NextJS)",
    link: "/guides/token-gating-website-nextjs",
  },
  {
    title: "Token Gating Website (Django)",
    link: "/guides/token-gating-website-django",
  },
  {
    title: "Unreal 5 Get Web3 Data",
    link: "/guides/unreal-5-get-web3-data",
  },
  {
    title: "Web3 Unity Multiplayer Playground",
    link: "/guides/web3-unity-multiplayer-playground",
  },
  {
    title: "Web3 Social Media",
    link: "/guides/web3-social-media",
  },
  {
    title: "Zapper Clone",
    link: "/guides/zapper-clone",
  },
  {
    title: "Solana Micro Blogger Dapp",
    link: "/guides/solana-micro-blogger-dapp",
  },
  {
    title: "Solana Multiplayer Game - TicTacToe",
    link: "/guides/solana-multiplayer-game-tictactoe",
  },
  {
    title: "Solana NFT Burner",
    link: "/guides/solana-nft-burner",
  },
  {
    title: "Solana NFT Explorer",
    link: "/guides/solana-nft-explorer",
  },
  {
    title: "Solana NFT Minter",
    link: "/guides/solana-nft-minter",
  },
];

const Guides = () => {
  return (
    <>
      {badgeList.map((name) => (
        <Badge variant="outline">{name}</Badge>
      ))}
      <div className="grid gap-4 grid-cols-3 mt-4">
        {guidesList.map(({ title, link }) => (
          <Card>
            <CardHeader>
              <h2>{title}</h2>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Link href={link}>Read More</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Guides;
