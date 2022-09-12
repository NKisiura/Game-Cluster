import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-list-title',
  templateUrl: './sidebar-list-title.component.html',
})
export class SidebarListTitleComponent {
  @Input('entity-list-title') public title!: string;
}
