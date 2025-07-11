import { WgetForm } from "./types";

const isNullish = (value: unknown): value is null | undefined => value == null;

const DEFAULT_WIDTH = "100%";
const DEFAULT_HEIGHT = "100%";
export const AUTO_SIZE_HEIGHT = "100vh";

export const getChartHeight = ({
  autoSize,
  height,
}: {
  autoSize?: boolean;
  height?: string;
}) => {
  if (isNullish(autoSize) && isNullish(height)) {
    return DEFAULT_HEIGHT;
  }

  if (autoSize) {
    return AUTO_SIZE_HEIGHT;
  }

  return height ?? DEFAULT_HEIGHT;
};

const getContainerDimensions = (params: WgetForm) => {
  const hasAutoSize = params.autoSize;
  const width = hasAutoSize ? DEFAULT_WIDTH : params.width || DEFAULT_WIDTH;
  const height = hasAutoSize ? DEFAULT_HEIGHT : params.height || DEFAULT_HEIGHT;
  return { width, height };
};

export const getReactContainerStyle = (params: WgetForm) => {
  const { width, height } = getContainerDimensions(params);
  return `style={{ width: "${width}", height: "${height}" }}`;
};
