import { Component, Input } from '@angular/core';
import { GameDetailsInterface } from '../../../../../../global/types/entities/games/game-details.interface';
import { GameDetailsPartitions } from '../../../../types/game-details-partitions.enum';
import { RouterLinks } from '../../../../../../global/constants/router-links';

@Component({
  selector: 'app-game-partition-wrapper-sidebar',
  templateUrl: './game-partition-wrapper-sidebar.component.html',
  styleUrls: ['./game-partition-wrapper-sidebar.component.scss'],
})
export class GamePartitionWrapperSidebarComponent {
  @Input('game') public game!: GameDetailsInterface;
  public gameRouterLink = RouterLinks.GAME_ROUTER_LINK;

  public getAvailableGamePartitions(): GameDetailsPartitions[] {
    const allGamePartitions = Object.values(GameDetailsPartitions);
    return allGamePartitions.filter((gamePartition: GameDetailsPartitions) => {
      switch (gamePartition) {
        case GameDetailsPartitions.SCREENSHOTS: {
          return this.game.screenshots_count > 0;
        }
        case GameDetailsPartitions.ACHIEVEMENTS: {
          return this.game.parent_achievements_count > 0;
        }
        case GameDetailsPartitions.SUGGESTIONS: {
          return this.game.suggestions_count > 0;
        }
        case GameDetailsPartitions.VIDEOS: {
          return this.game.youtube_count > 0;
        }
      }
    });
  }

  public getGamePartitionLabel(gamePartition: GameDetailsPartitions): string {
    switch (gamePartition) {
      case GameDetailsPartitions.SCREENSHOTS: {
        return 'screenshots';
      }
      case GameDetailsPartitions.ACHIEVEMENTS: {
        return 'achievements';
      }
      case GameDetailsPartitions.SUGGESTIONS: {
        return 'games like';
      }
      case GameDetailsPartitions.VIDEOS: {
        return 'videos';
      }
    }
  }

  public getPartitionItemsCount(gamePartition: GameDetailsPartitions): number {
    switch (gamePartition) {
      case GameDetailsPartitions.SCREENSHOTS: {
        return this.game.screenshots_count;
      }
      case GameDetailsPartitions.ACHIEVEMENTS: {
        return this.game.parent_achievements_count;
      }
      case GameDetailsPartitions.SUGGESTIONS: {
        return this.game.suggestions_count;
      }
      case GameDetailsPartitions.VIDEOS: {
        //hardcore because backend lag, but it's always === 50
        return 50;
      }
    }
  }
}
