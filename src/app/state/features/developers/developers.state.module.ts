import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersService } from './services/developers.service';
import { StoreModule } from '@ngrx/store';
import { developersFeatureKey } from './types/developers-feature-key';
import { developersReducers } from './reducers/developers.reducers';
import { EffectsModule } from '@ngrx/effects';
import { DevelopersEffect } from './effects/developers.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(developersFeatureKey, developersReducers),
    EffectsModule.forFeature([DevelopersEffect]),
  ],
  providers: [DevelopersService],
})
export class DevelopersStateModule {}
