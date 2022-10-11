import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { BrowseEntityComponent } from './components/browse-entity/browse-entity.component';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardListModule } from '../../global/modules/layouts/card-list/card-list.module';
import { BrowseService } from './services/browse.service';
import { EntityCardItemsComponent } from './components/entity-card/entity-card-item-list/entity-card-items.component';
import { LoadMoreButtonModule } from '../../global/modules/layouts/load-more-button/load-more-button.module';
import { ScrollDownEmitterModule } from '../../global/modules/features/scroll-down-emitter/scroll-down-emitter.module';
import { LoadingSpinnerModule } from '../../global/modules/layouts/loading-spinner/loading-spinner.module';
import { PageTitleModule } from '../../global/modules/layouts/page-title/page-title.module';
import { BackendErrorMessageModule } from '../../global/modules/layouts/backend-error-message/backend-error-message.module';
import { ScrollUpButtonModule } from '../../global/modules/features/scroll-up-button/scroll-up-button.module';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'browse/:entity',
    component: BrowseEntityComponent,
  },
];

@NgModule({
  declarations: [
    BrowseComponent,
    BrowseEntityComponent,
    EntityCardComponent,
    EntityCardItemsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    CardListModule,
    LoadMoreButtonModule,
    ScrollDownEmitterModule,
    LoadingSpinnerModule,
    PageTitleModule,
    BackendErrorMessageModule,
    ScrollUpButtonModule,
  ],
  providers: [BrowseService],
})
export class BrowseModule {}
