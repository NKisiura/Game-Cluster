import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSearchService } from './services/game-search.service';
import { StoreModule } from '@ngrx/store';
import { gameSearchFeatureKey } from './types/game-search-feature-key';
import { gameSearchReducers } from './reducers/game-search.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameSearchEffect } from './effects/game-search.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(gameSearchFeatureKey, gameSearchReducers),
    EffectsModule.forFeature([GameSearchEffect]),
  ],
  providers: [GameSearchService],
})
export class GameSearchStateModule {}
