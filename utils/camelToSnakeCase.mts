const camelToSnakeCase = (str) => {
  return (str.charAt(0).toLowerCase() + str.slice(1))
    .replaceAll("NFT", "Nft")
    .replaceAll("SPL", "Spl")
    .replaceAll("IPFS", "Ipfs")
    .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};

module.exports = camelToSnakeCase;
