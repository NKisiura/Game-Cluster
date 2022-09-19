import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsService } from './services/tags.service';
import { StoreModule } from '@ngrx/store';
import { tagsFeatureKey } from './types/tags-feature-key';
import { tagsReducers } from './reducers/tags.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TagsEffect } from './effects/tags.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(tagsFeatureKey, tagsReducers),
    EffectsModule.forFeature([TagsEffect]),
  ],
  providers: [TagsService],
})
export class TagsStateModule {}
