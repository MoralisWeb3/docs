import React from "react";
import Admonition from "@theme/Admonition";

interface PremiumEndpointProps {
  customText?: string;
}

export const PremiumEndpoint: React.FC<PremiumEndpointProps> = ({ 
  customText 
}) => {
  const defaultText = `To use this API, you will need an API key associated with a Moralis account on the <strong>Pro</strong> plan or higher.`;
  
  return (
    <Admonition type="info" icon="💡" title="Premium Endpoint">
      <p dangerouslySetInnerHTML={{ __html: customText || defaultText }} />
    </Admonition>
  );
};