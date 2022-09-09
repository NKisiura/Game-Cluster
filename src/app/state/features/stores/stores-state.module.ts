import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { storesFeatureKey } from './types/stores-feature-key';
import { storesReducers } from './reducers/stores.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoresEffect } from './effects/stores.effect';
import { StoresService } from './services/stores.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(storesFeatureKey, storesReducers),
    EffectsModule.forFeature([StoresEffect]),
  ],
  providers: [StoresService],
})
export class StoresStateModule {}
