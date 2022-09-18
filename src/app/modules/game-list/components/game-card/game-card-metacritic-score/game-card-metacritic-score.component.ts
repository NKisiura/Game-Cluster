import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card-metacritic-score',
  templateUrl: './game-card-metacritic-score.component.html',
})
export class GameCardMetacriticScoreComponent {
  @Input('metacritic-score') public score!: number;
}
