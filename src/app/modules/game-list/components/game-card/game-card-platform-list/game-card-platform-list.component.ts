import { Component, Input } from '@angular/core';
import { GameParentPlatform } from '../../../../../global/types/entities/games/game.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-game-card-platform-list',
  templateUrl: './game-card-platform-list.component.html',
})
export class GameCardPlatformListComponent {
  @Input('parent-platform-list')
  public gameParentPlatformList!: GameParentPlatform[];

  constructor(private iconService: IconService) {}

  public getPlatformIcon(platformSlug: string): IconDefinition {
    return this.iconService.getPlatformIconBySlug(platformSlug);
  }
}
