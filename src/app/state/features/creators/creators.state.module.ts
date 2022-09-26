import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsService } from './services/creators.service';
import { StoreModule } from '@ngrx/store';
import { creatorsFeatureKey } from './types/creators-feature-key';
import { EffectsModule } from '@ngrx/effects';
import { CreatorsEffect } from './effects/creators.effect';
import { creatorsReducers } from './reducers/creators.deducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(creatorsFeatureKey, creatorsReducers),
    EffectsModule.forFeature([CreatorsEffect]),
  ],
  providers: [CreatorsService],
})
export class CreatorsStateModule {}
