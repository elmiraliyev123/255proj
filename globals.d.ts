declare var ImageDecoder: {
  prototype: ImageDecoder;
  new (...args: any[]): ImageDecoder;
};

interface ImageDecoder {
  decode(): Promise<ImageBitmap>;
}
