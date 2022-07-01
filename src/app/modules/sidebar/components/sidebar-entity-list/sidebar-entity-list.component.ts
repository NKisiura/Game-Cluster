import { Component, Input } from '@angular/core';
import { Entity } from '../../../../global/types/entities/entity';
import { RouterLinks } from '../../../../global/constants/router-links';

@Component({
  selector: 'app-sidebar-entity-list',
  templateUrl: './sidebar-entity-list.component.html',
  styleUrls: ['./sidebar-entity-list.component.scss'],
})
export class SidebarEntityListComponent {
  @Input('entity-type') public entityType!: string;
  @Input('entity-list') public entityList!: Entity[];

  public gamesRouterLink = RouterLinks.GAMES_ROUTER_LINK;

  public setQueryParams(entity: Entity) {
    return { [this.entityType]: entity.id };
  }
}
