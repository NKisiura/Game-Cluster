import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-entity-list-title',
  templateUrl: './sidebar-entity-list-title.component.html',
})
export class SidebarEntityListTitleComponent {
  @Input('entity-list-title') public title!: string;
}
