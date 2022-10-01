import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsService } from './services/game-details.service';
import { StoreModule } from '@ngrx/store';
import { gameDetailsFeatureKey } from './types/game-details-feature-key';
import { gameDetailsReducers } from './reducers/game-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameDetailsEffect } from './effects/game-details.effect';
import { GameScreenshotsEffect } from './effects/game-screenshots.effect';
import { GameAchievementsEffect } from './effects/game-achievements.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(gameDetailsFeatureKey, gameDetailsReducers),
    EffectsModule.forFeature([
      GameDetailsEffect,
      GameScreenshotsEffect,
      GameAchievementsEffect,
    ]),
  ],
  providers: [GameDetailsService],
})
export class GameDetailsStateModule {}
