import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from './services/app.service';
import { StoreModule } from '@ngrx/store';
import { appFeatureKey } from './types/app-feature-key';
import { appReducers } from './reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TotalGamesCountEffect } from './effects/total-games-count.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(appFeatureKey, appReducers),
    EffectsModule.forFeature([TotalGamesCountEffect]),
  ],
  providers: [AppService],
})
export class AppStateModule {}
