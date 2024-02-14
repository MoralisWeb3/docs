const bodyFixer = (code: string, body: {}) => {
  let fixedBody;
  switch (true) {
    case code.includes("getContractEvents"):
      fixedBody = { abi: body };
      break;

    case code.includes("getMultipleTokenPrices"):
      fixedBody = { tokens: (body as any).tokens };
      break;

    case code.includes("getMultipleNFTs"):
      fixedBody = { tokens: (body as any).tokens };
      break;

    default:
      break;
  }
  return fixedBody;
};

export default bodyFixer;
