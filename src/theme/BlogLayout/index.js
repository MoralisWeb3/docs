import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Timeline from "@site/src/components/Timeline";

export default function BlogLayout(props) {
  const { pathname } = useLocation();
  const { sidebar, toc, children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg" style={{ maxWidth: "42rem" }}>
        {pathname === "/changelog" ? (
          <div className="grid gap-9 mt-9">
            <div className="grid gap-2">
              <div className="row justify-center">
                <h1>
                  <b>Latest Updates</b>
                </h1>
              </div>
              <div className="row justify-center">
                <p className="text-center leading-9">
                  All the latest Moralis updates, straight from the team.
                  <br />
                  For information about our breaking changes policy,{" "}
                  <Link href="breaking-changes">see more here</Link>
                </p>
              </div>
            </div>
            <Timeline content={sidebar} />
          </div>
        ) : (
          <div className="grid gap-3 mt-3">
            <div className="row ml-1">
              <Link href="/changelog">Go Back</Link>
            </div>
            <div className="row justify-center h-screen">
              <main className="col" itemScope itemType="http://schema.org/Blog">
                {children}
              </main>
              {toc && <div className="col col--2">{toc}</div>}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
