export interface GameYoutubeVideoInterface {
  readonly id: number;
  readonly external_id: number;
  readonly channel_title: string;
  readonly name: string;
  readonly created: string;
  readonly view_count: string;
  readonly thumbnails: YoutubeVideoThumbnails;
}

interface YoutubeVideoThumbnails {
  readonly default: {
    readonly width: number;
    readonly height: number;
    readonly url: string;
  };
  readonly medium: {
    readonly width: number;
    readonly height: number;
    readonly url: string;
  };
  readonly maxresdefault: {
    readonly width: number;
    readonly height: number;
    readonly url: string;
  };
}
