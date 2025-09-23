import React from "react";
import Link from "@docusaurus/Link";

const BreakingChanges = () => {
    return (
        <div className="ml-5 mr-5">
            <div className="row justify-center">
                <div className="column" style={{ maxWidth: "42rem" }}>
                    <div className="mt-5 mb-3">
                        <Link href="/changelog">Go Back</Link>
                    </div>
                    <h1>Breaking changes to API and Streams</h1>
                    <p>
                        When integrating with Moralis APIs or Streams, you'll need to be aware of
                        the types of changes that we might make when developing new endpoints or
                        iterating on existing ones. Learn about what we consider a breaking-change
                        and non-breaking change below.
                    </p>
                    <h1>Breaking changes</h1>
                    <p>
                        Breaking changes are typically any changes that might require action from
                        our customers (i.e. code changes are required). For all breaking changes, we
                        aim to provide you with at least 60 days notice prior to making the change.
                        In certains cases related to security, privacy or urgent issues related to
                        service resiliency we may reduce the 60 day timeframe.
                    </p>
                    <p>
                        <b>Please note:</b> This notice period is applicable to endpoints that are
                        made released to general availability. However, for beta, experimental, or
                        preview endpoints that are still in the early stages, we will continue to
                        make frequent updates as we continue to refine them. Such endpoints will be
                        marked as beta or experimental on our API reference page. All breaking
                        changes will be communicated across the following channels:
                    </p>
                    <ul>
                        <li>
                            <Link href="/changelog">Changelog</Link>
                        </li>
                        <li>
                            <Link href="https://forum.moralis.io/">Forum</Link>
                        </li>
                        <li>
                            <Link href="https://x.com/moralisdevs">Twitter</Link>
                        </li>
                        <li>Intercom</li>
                        <li>Discord</li>
                        <li>Product Emails</li>
                        <li>Slack channels (Enterprise customers only)</li>
                    </ul>
                    <p>Below are examples of what we consider breaking changes:</p>
                    <ul>
                        <li>Removing support for a blockchain</li>
                        <li>Removing an endpoint</li>
                        <li>
                            Removing a field from the response (a "field" in this case is a JSON
                            key/value pair)
                        </li>
                        <li>Removing a query parameter</li>
                        <li>Adding a new required field, header, or parameter in the request</li>
                        <li>Renaming a field</li>
                        <li>Changing the data type of a field</li>
                        <li>Changing error response codes</li>
                        <li>Changing authorization types</li>
                        <li>Making validation more stringent</li>
                        <li>Significantly increase the size of a response (10x)</li>
                    </ul>
                    <h1>Non-breaking changes (backwards-compatible)</h1>
                    <p>
                        We consider the following changes to be non-breaking backwards-compatible:
                    </p>
                    <ul>
                        <li>Adding new API resources</li>
                        <li>Adding new optional request parameters to existing API methods</li>
                        <li>Changing the default value of optional query parameters</li>
                        <li>Adding new properties to existing API responses</li>
                        <li>Changing the order of properties in existing API responses</li>
                        <li>Changing the CU cost of an endpoint</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BreakingChanges;
