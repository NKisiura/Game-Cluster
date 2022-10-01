import { GameAchievementInterface } from '../../../../global/types/entities/games/game-achievement.interface';

export interface GetGameAchievementsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly result: GameAchievementInterface[] | null;
}
