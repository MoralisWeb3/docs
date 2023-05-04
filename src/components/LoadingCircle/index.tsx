import React from "react";

const LoadingCircle = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader animate-spin w-4 h-4 border-t-2 border-blue-500 border-solid rounded-full"></div>
    </div>
  );
};

export default LoadingCircle;
