import { Component, Input } from '@angular/core';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar-entity-list-loading',
  templateUrl: './sidebar-entity-list-loading.component.html',
})
export class SidebarEntityListLoadingComponent {
  @Input('entity-type') public entityType!: string;

  constructor(private iconService: IconService) {}

  public getLoadingIcon(): IconDefinition {
    return this.iconService.getLoadingIcon();
  }
}
