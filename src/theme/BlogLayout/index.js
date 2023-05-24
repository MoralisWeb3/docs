import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Timeline from "@site/src/components/Timeline";
import { useQueryStringValue } from "@docusaurus/theme-common/internal";
import { useToast } from "@site/src/components/ui/use-toast";

export default function BlogLayout(props) {
  const { pathname } = useLocation();
  const { sidebar, toc, children, ...layoutProps } = props;
  const subscribe = useQueryStringValue("subscribe");
  const { toast } = useToast();

  const succesUrl = window.location.href + "?subscribe=true";

  useEffect(() => {
    if (subscribe) {
      setTimeout(() => {
        toast({
          title: "Success!",
          description: "Check your email to confirm your subscription.",
        });
      }, 500);
    }
  }, [subscribe]);

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg" style={{ maxWidth: "42rem" }}>
        {pathname === "/changelog" ? (
          <div>
            <header className="py-16 sm:text-center">
              <h1>Latest Updates</h1>
              <p className="text-lg">
                All the latest Moralis updates, straight from the team.
                <br />
                For information about our breaking changes policy,{" "}
                <Link href="breaking-changes">see more here</Link>
              </p>

              <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
                <h2 className="sr-only">Sign up for our newsletter</h2>
                <form
                  action={`https://eu.customerioforms.com/forms/submit_action?site_id=6c69e3929c946a3eee81&form_id=445866b47b20460&success_url=${succesUrl}`}
                  method="post"
                  className="flex flex-wrap -mx-2"
                >
                  <div className="px-2 grow-[9999] basis-64 mt-3">
                    <div className="group relative">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
                      >
                        <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path>
                        <path d="m6 7 6 5 6-5"></path>
                      </svg>
                      <input
                        name="email"
                        type="email"
                        required=""
                        autoComplete="email"
                        aria-label="Email address"
                        className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                        placeholder="Subscribe via email"
                      />
                    </div>
                  </div>
                  <div className="px-2 grow flex mt-3">
                    <button
                      type="submit"
                      className="inline-flex button button--md button--outline button--primary px-3"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </section>
            </header>
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
