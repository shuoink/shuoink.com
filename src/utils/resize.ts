const resize = (
  src: StaticImageData,
  opts: {width?: number; height?: number}
): {width: number; height: number} => {
  if (opts.width != null && opts.height != null) {
    return {width: opts.width, height: opts.height};
  }
  if (opts.width != null) {
    return {width: opts.width, height: (opts.width / src.width) * src.height};
  }
  if (opts.height != null) {
    return {width: (opts.height / src.height) * src.width, height: opts.height};
  }
  return {width: src.width, height: src.height};
};

export default resize;
