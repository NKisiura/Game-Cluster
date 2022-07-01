import { Component, Input } from '@angular/core';
import { GameInterface } from '../../../../global/types/entities/games/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
})
export class GameCardComponent {
  @Input('game') public game!: GameInterface;
}
