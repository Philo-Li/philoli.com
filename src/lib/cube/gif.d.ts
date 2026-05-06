declare module 'gif.js' {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
    repeat?: number;
    background?: string;
    transparent?: number | null;
    debug?: boolean;
    dither?: boolean | string;
  }
  interface AddFrameOptions {
    delay?: number;
    copy?: boolean;
    dispose?: number;
  }
  type ImageSource =
    | HTMLCanvasElement
    | CanvasRenderingContext2D
    | HTMLImageElement
    | ImageData;
  class GIF {
    constructor(opts?: GIFOptions);
    addFrame(image: ImageSource, opts?: AddFrameOptions): void;
    render(): void;
    abort(): void;
    on(event: 'progress', cb: (p: number) => void): void;
    on(event: 'finished', cb: (blob: Blob) => void): void;
    on(event: 'abort', cb: () => void): void;
  }
  export default GIF;
}

declare module 'gif.js/dist/gif.worker.js?url' {
  const url: string;
  export default url;
}
