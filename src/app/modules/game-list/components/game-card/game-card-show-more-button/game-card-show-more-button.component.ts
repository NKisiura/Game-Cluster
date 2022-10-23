import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { RouterLinks } from '../../../../../global/constants/router-links';
import { GameDetailsPartitions } from '../../../../game-details/types/game-details-partitions.enum';

@Component({
  selector: 'app-game-card-show-more-button',
  templateUrl: './game-card-show-more-button.component.html',
})
export class GameCardShowMoreButtonComponent {
  @Input('game-slug') public gameSlug!: string;
  public gameRouterLink = RouterLinks.GAME_ROUTER_LINK;
  public gameSuggestionsPartitionRouterLink = GameDetailsPartitions.SUGGESTIONS;

  constructor(private readonly iconService: IconService) {}

  public getArrowRightIcon(): IconDefinition {
    return this.iconService.getArrowIcons().right;
  }
}
