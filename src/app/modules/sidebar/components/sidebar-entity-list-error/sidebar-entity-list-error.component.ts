import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-entity-list-error',
  templateUrl: './sidebar-entity-list-error.component.html',
})
export class SidebarEntityListErrorComponent {
  @Input('entity-type') public entityType!: string;
}
