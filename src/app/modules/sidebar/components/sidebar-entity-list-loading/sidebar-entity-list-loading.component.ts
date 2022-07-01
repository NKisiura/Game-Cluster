import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-entity-list-loading',
  templateUrl: './sidebar-entity-list-loading.component.html',
})
export class SidebarEntityListLoadingComponent {
  @Input('entity-type') public entityType!: string;
}
