import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsStateModule } from './features/platforms/platforms-state.module';

@NgModule({
  imports: [CommonModule, PlatformsStateModule],
})
export class StateModule {}
