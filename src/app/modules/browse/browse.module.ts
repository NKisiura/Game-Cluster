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
  ],
  providers: [BrowseService],
})
export class BrowseModule {}
