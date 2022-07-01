import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsStateModule } from './features/platforms/platforms-state.module';
import { GamesStateModule } from './features/games/games-state.module';

@NgModule({
  imports: [CommonModule, PlatformsStateModule, GamesStateModule],
})
export class StateModule {}
