import { Component, Input } from '@angular/core';
import { GameStore } from '../../../../../../global/types/entities/games/game.interface';
import { IconService } from '../../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-game-stores',
  templateUrl: './game-stores.component.html',
})
export class GameStoresComponent {
  @Input('game-stores') public gameStores!: GameStore[];

  constructor(private readonly iconService: IconService) {}

  public getStoreIcon(storeSlug: string): IconDefinition {
    return this.iconService.getStoreIconBySlug(storeSlug);
  }
}
