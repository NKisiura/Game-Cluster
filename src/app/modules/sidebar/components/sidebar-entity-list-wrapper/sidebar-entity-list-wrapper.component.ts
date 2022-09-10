import { Component } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-sidebar-entity-list-wrapper',
  animations: [
    trigger('openCloseSidebarList', [
      state(
        'open',
        style({
          height: '*',
        })
      ),
      state(
        'close',
        style({
          height: '120px',
        })
      ),
      transition('open <=> close', [animate('200ms ease-in-out')]),
    ]),
  ],
  templateUrl: './sidebar-entity-list-wrapper.component.html',
})
export class SidebarEntityListWrapperComponent {
  public arrowUpIcon = faChevronUp;
  public arrowDownIcon = faChevronDown;
  public isOpen: boolean = false;

  public handleToggleList(): void {
    this.isOpen = !this.isOpen;
  }
}
