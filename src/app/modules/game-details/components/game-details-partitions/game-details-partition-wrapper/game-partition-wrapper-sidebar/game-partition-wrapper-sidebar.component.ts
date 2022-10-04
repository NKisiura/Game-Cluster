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
          return this.game.achievements_count > 0;
        }
      }
    });
  }

  public getGamePartitionLabel(gamePartition: GameDetailsPartitions): string {
    switch (gamePartition) {
      case GameDetailsPartitions.ACHIEVEMENTS: {
        return 'achievements';
      }
      case GameDetailsPartitions.SCREENSHOTS: {
        return 'screenshots';
      }
    }
  }
}
