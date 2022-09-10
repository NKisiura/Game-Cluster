import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HeaderLogoComponent, HeaderSearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
