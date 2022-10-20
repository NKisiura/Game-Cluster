import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarEntityListComponent } from './components/sidebar-entity-list/sidebar-entity-list.component';
import { SidebarListTitleComponent } from './components/sidebar-list-title/sidebar-list-title.component';
import { SidebarEntityListLoadingComponent } from './components/sidebar-entity-list-loading/sidebar-entity-list-loading.component';
import { SidebarEntityListErrorComponent } from './components/sidebar-entity-list-error/sidebar-entity-list-error.component';
import { SidebarListWrapperComponent } from './components/sidebar-list-wrapper/sidebar-list-wrapper.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarBrowseListComponent } from './components/sidebar-browse-list/sidebar-browse-list.component';
import { SidebarHeightController } from './components/sidebar/sidebar-height-controller';
import { SidebarGameCollectionListComponent } from './components/sidebar-game-collection-list/sidebar-game-collection-list.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarEntityListComponent,
    SidebarListTitleComponent,
    SidebarEntityListLoadingComponent,
    SidebarEntityListErrorComponent,
    SidebarListWrapperComponent,
    SidebarBrowseListComponent,
    SidebarGameCollectionListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [SidebarHeightController],
  exports: [SidebarComponent],
})
export class SidebarModule {}
