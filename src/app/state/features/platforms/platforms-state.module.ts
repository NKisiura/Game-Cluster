import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { platformsFeatureKey } from './types/platforms-feature-key';
import { platformsReducers } from './reducers/platforms.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PlatformsEffect } from './effects/platforms.effect';
import { PlatformsService } from './services/platforms.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(platformsFeatureKey, platformsReducers),
    EffectsModule.forFeature([PlatformsEffect]),
  ],
  providers: [PlatformsService],
})
export class PlatformsStateModule {}
