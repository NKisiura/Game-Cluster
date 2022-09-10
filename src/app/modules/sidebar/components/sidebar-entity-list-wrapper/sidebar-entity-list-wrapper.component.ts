import { Component } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-entity-list-wrapper',
  templateUrl: './sidebar-entity-list-wrapper.component.html',
})
export class SidebarEntityListWrapperComponent {
  public arrowUpIcon = faChevronUp;
  public arrowDownIcon = faChevronDown;
  public isListCollapsed: boolean = false;

  public handleToggleList(): void {
    this.isListCollapsed = !this.isListCollapsed;
  }
}
