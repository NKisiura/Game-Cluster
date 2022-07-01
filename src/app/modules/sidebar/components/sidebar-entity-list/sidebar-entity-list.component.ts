import { Component, Input } from '@angular/core';
import { Entity } from '../../../../global/types/entities/entity';

@Component({
  selector: 'app-sidebar-entity-list',
  templateUrl: './sidebar-entity-list.component.html',
})
export class SidebarEntityListComponent {
  @Input('entity-type') public entityType!: string;
  @Input('entity-list') public entityList!: Entity[];
}
