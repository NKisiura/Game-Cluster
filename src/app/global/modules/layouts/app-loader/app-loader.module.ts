import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppLoaderComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [AppLoaderComponent],
})
export class AppLoaderModule {}
