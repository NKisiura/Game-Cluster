import { Component, Input } from '@angular/core';
import { GameAchievementInterface } from '../../../../../global/types/entities/games/game-achievement.interface';

@Component({
  selector: 'app-game-achievement',
  templateUrl: './game-achievement.component.html',
})
export class GameAchievementComponent {
  @Input('achievement') public achievement!: GameAchievementInterface;
}
