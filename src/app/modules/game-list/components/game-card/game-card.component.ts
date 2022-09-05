import { Component, Input } from '@angular/core';
import { GameInterface } from '../../../../global/types/entities/games/game.interface';
import { RouterLinks } from '../../../../global/constants/router-links';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
})
export class GameCardComponent {
  @Input('game') public game!: GameInterface;

  public gameRouterLink: string = RouterLinks.GAME_ROUTER_LINK;
}
