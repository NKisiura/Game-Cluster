import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresService } from './services/genres.service';
import { StoreModule } from '@ngrx/store';
import { genresFeatureKey } from './types/genres-feature-key';
import { genresReducers } from './reducers/genres.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GenresEffect } from './effects/genres.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(genresFeatureKey, genresReducers),
    EffectsModule.forFeature([GenresEffect]),
  ],
  providers: [GenresService],
})
export class GenresStateModule {}
