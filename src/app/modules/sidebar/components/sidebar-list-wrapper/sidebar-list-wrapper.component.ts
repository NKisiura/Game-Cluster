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
  selector: 'app-sidebar-list-wrapper',
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
  templateUrl: './sidebar-list-wrapper.component.html',
})
export class SidebarListWrapperComponent {
  public arrowUpIcon = faChevronUp;
  public arrowDownIcon = faChevronDown;
  public isOpen: boolean = false;

  public handleToggleList(): void {
    this.isOpen = !this.isOpen;
  }
}
