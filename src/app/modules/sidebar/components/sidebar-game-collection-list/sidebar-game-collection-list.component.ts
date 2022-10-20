import { Component } from '@angular/core';
import { RouterLinks } from '../../../../global/constants/router-links';
import {
  GameCollection,
  GameCollectionLabel,
} from '../../../game-collection/types/game-collection.enum';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-game-collection-list',
  templateUrl: './sidebar-game-collection-list.component.html',
  styleUrls: ['./sidebar-game-collection-list.component.scss'],
})
export class SidebarGameCollectionListComponent {
  public gameCollectionRouterLink: string = RouterLinks.GAME_COLLECTION_LINK;
  public gameCollections: GameCollection[] = Object.values(GameCollection);

  constructor(private readonly iconService: IconService) {}

  public getGameCollectionIconBySlug(
    gameCollectionSlug: GameCollection
  ): IconDefinition {
    return this.iconService.getGameCollectionIconBySlug(gameCollectionSlug);
  }

  public defineGameCollectionTitle(gameCollection: GameCollection): string {
    switch (gameCollection) {
      case GameCollection.LAST_30_DAYS: {
        return GameCollectionLabel.LAST_30_DAYS;
      }
      case GameCollection.NEXT_WEEK: {
        return GameCollectionLabel.NEXT_WEEK;
      }
      case GameCollection.BEST_OF_THE_YEAR: {
        return GameCollectionLabel.BEST_OF_THE_YEAR;
      }
      case GameCollection.ALL_TIME_TOP: {
        return GameCollectionLabel.ALL_TIME_TOP;
      }
    }
  }
}
