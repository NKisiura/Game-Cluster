import { GameYoutubeVideoInterface } from '../../../../global/types/entities/games/game-youtube-video.interface';

export interface GetGameVideosResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: GameYoutubeVideoInterface[] | null;
}
