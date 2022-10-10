import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { RouterModule } from '@angular/router';
import { HeaderCreatorComponent } from './components/header-creator/header-creator.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderSearchComponent,
    HeaderCreatorComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
