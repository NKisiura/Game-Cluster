import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { publishersFeatureKey } from './types/publishers-feature-key';
import { publishersReducers } from './reducers/publishers.reducers';
import { PublishersService } from './services/publishers.service';
import { PublishersEffect } from './effects/publishers.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(publishersFeatureKey, publishersReducers),
    EffectsModule.forFeature([PublishersEffect]),
  ],
  providers: [PublishersService],
})
export class PublishersStateModule {}
