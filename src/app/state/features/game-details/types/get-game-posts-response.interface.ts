import { GameRedditPostInterface } from '../../../../global/types/entities/games/game-reddit-post.interface';

export interface GetGamePostsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: GameRedditPostInterface[] | null;
}
