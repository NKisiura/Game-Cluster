import { Component, Input } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';

@Component({
  selector: 'app-game-section-info',
  templateUrl: './game-section-info.component.html',
})
export class GameSectionInfoComponent {
  @Input('game') public game!: GameDetailsInterface;
}
