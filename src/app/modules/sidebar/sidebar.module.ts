import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarEntityListComponent } from './components/sidebar-entity-list/sidebar-entity-list.component';
import { SidebarEntityListTitleComponent } from './components/sidebar-entity-list-title/sidebar-entity-list-title.component';
import { SidebarEntityListLoadingComponent } from './components/sidebar-entity-list-loading/sidebar-entity-list-loading.component';
import { SidebarEntityListErrorComponent } from './components/sidebar-entity-list-error/sidebar-entity-list-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarEntityListComponent,
    SidebarEntityListTitleComponent,
    SidebarEntityListLoadingComponent,
    SidebarEntityListErrorComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
