const makeMetaDescription = ({
  description,
  path,
}: {
  description?: string;
  path?: string;
}) => {
  if (description) {
    return `${description.replace(".", "")} [API Documentation].`;
  }

  if (path) {
    return `${path} [API Documentation].`;
  }
};

export default makeMetaDescription;
