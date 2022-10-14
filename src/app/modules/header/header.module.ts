import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { RouterModule } from '@angular/router';
import { HeaderCreatorComponent } from './components/header-creator/header-creator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HeaderSearchResultComponent } from './components/header-search/header-search-result/header-search-result.component';
import { LoadingSpinnerModule } from '../../global/modules/layouts/loading-spinner/loading-spinner.module';
import { EmptyResultMessageModule } from '../../global/modules/layouts/empty-result-message/empty-result-message.module';
import { BackendErrorMessageModule } from '../../global/modules/layouts/backend-error-message/backend-error-message.module';
import { HeaderSearchGameComponent } from './components/header-search/header-search-game/header-search-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderSearchComponent,
    HeaderSearchResultComponent,
    HeaderSearchGameComponent,
    HeaderCreatorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    LoadingSpinnerModule,
    EmptyResultMessageModule,
    BackendErrorMessageModule,
    BrowserAnimationsModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
