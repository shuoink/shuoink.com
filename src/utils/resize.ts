const resize = (
  source: StaticImageData,
  options: {width?: number; height?: number}
): {width: number; height: number} => {
  if (options.width != null && options.height != null) {
    return {width: options.width, height: options.height};
  }
  if (options.width != null) {
    return {
      width: options.width,
      height: (options.width / source.width) * source.height,
    };
  }
  if (options.height != null) {
    return {
      width: (options.height / source.height) * source.width,
      height: options.height,
    };
  }
  return {width: source.width, height: source.height};
};

export default resize;
