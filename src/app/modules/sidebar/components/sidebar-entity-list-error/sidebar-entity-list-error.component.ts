import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../global/utils/services/icon.service';

@Component({
  selector: 'app-sidebar-entity-list-error',
  templateUrl: './sidebar-entity-list-error.component.html',
})
export class SidebarEntityListErrorComponent {
  @Input('entity-type') public entityType!: string;

  constructor(private readonly iconService: IconService) {}

  public getWarningIcon(): IconDefinition {
    return this.iconService.getWarningIcon();
  }
}
