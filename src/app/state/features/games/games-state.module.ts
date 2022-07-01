import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './services/games.service';
import { StoreModule } from '@ngrx/store';
import { gamesFeatureKey } from './types/games-feature-key';
import { gamesReducers } from './reducers/games.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffect } from './effects/games.effect';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(gamesFeatureKey, gamesReducers),
    EffectsModule.forFeature([GamesEffect]),
  ],
  providers: [GamesService],
})
export class GamesStateModule {}
