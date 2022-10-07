import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBackgroundComponent } from './components/app-background/app-background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppBackgroundComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [AppBackgroundComponent],
})
export class AppBackgroundModule {}
