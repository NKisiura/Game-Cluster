import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarEntityListComponent } from './components/sidebar-entity-list/sidebar-entity-list.component';
import { SidebarEntityListTitleComponent } from './components/sidebar-entity-list-title/sidebar-entity-list-title.component';
import { SidebarEntityListLoadingComponent } from './components/sidebar-entity-list-loading/sidebar-entity-list-loading.component';
import { SidebarEntityListErrorComponent } from './components/sidebar-entity-list-error/sidebar-entity-list-error.component';
import { SidebarEntityListWrapperComponent } from './components/sidebar-entity-list-wrapper/sidebar-entity-list-wrapper.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from '../../global/utils/services/icon.service';
import { MainEntitiesService } from '../../global/utils/services/main-entities.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarEntityListComponent,
    SidebarEntityListTitleComponent,
    SidebarEntityListLoadingComponent,
    SidebarEntityListErrorComponent,
    SidebarEntityListWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  exports: [SidebarComponent],
  providers: [IconService, MainEntitiesService],
})
export class SidebarModule {}
