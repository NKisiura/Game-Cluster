import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsStateModule } from './features/platforms/platforms-state.module';
import { GamesStateModule } from './features/games/games-state.module';
import { GameDetailsStateModule } from './features/game-details/game-details-state.module';

@NgModule({
  imports: [
    CommonModule,
    PlatformsStateModule,
    GamesStateModule,
    GameDetailsStateModule,
  ],
})
export class StateModule {}
