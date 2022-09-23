import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsStateModule } from './features/platforms/platforms-state.module';
import { GamesStateModule } from './features/games/games-state.module';
import { GameDetailsStateModule } from './features/game-details/game-details-state.module';
import { GenresStateModule } from './features/genres/genres-state.module';
import { StoresStateModule } from './features/stores/stores-state.module';
import { TagsStateModule } from './features/tags/tags-state.module';
import { DevelopersStateModule } from './features/developers/developers.state.module';

@NgModule({
  imports: [
    CommonModule,
    PlatformsStateModule,
    GamesStateModule,
    GameDetailsStateModule,
    GenresStateModule,
    StoresStateModule,
    TagsStateModule,
    DevelopersStateModule,
  ],
})
export class StateModule {}
