import React from "react";
import Admonition from "@theme/Admonition";

interface PremiumEndpointNoticeProps {
    children?: React.ReactNode;
    plural?: boolean;
}

const PremiumEndpointNotice: React.FC<PremiumEndpointNoticeProps> = ({ children, plural = false }) => {
    const title = plural ? "Premium Endpoints" : "Premium Endpoint";
    const text = plural
        ? "To use these endpoints, you will need an API key associated with a Moralis account on the"
        : "To use this API, you will need an API key associated with a Moralis account on the";

    return (
        <Admonition type="info" icon="💡" title={title}>
            <p>
                {text} <strong>Pro</strong> plan or higher.
            </p>
            {children}
        </Admonition>
    );
};

export default PremiumEndpointNotice;
