import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { BrowseEntityComponent } from './components/browse-entity/browse-entity.component';
import { EntityCardComponent } from './components/entity-card/entity-card.component';

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
  declarations: [BrowseComponent, BrowseEntityComponent, EntityCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BrowseModule {}
