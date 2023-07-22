const bodyFixer = (code: string, body: {}) => {
  let fixedBody;
  switch (true) {
    case code.includes("getContractEvents"):
      fixedBody = { abi: body };
      break;

    default:
      break;
  }
  return fixedBody;
};

export default bodyFixer;
