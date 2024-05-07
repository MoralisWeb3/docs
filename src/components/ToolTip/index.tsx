import React from "react";

const Tooltip = ({ content }) => (
    <div className="tooltip-container">
      {content}
      <span className="tooltip-text">{content}</span>
    </div>
  );
  
  export default Tooltip;