import { Component, Input } from '@angular/core';
import { Entity } from '../../../../global/types/entities/entity';
import { RouterLinks } from '../../../../global/constants/router-links';
import { Params } from '@angular/router';

@Component({
  selector: 'app-sidebar-entity-list',
  templateUrl: './sidebar-entity-list.component.html',
  styleUrls: ['./sidebar-entity-list.component.scss'],
})
export class SidebarEntityListComponent {
  @Input('entity-type') public entityType!: string;
  @Input('entity-list') public entityList!: Entity[];

  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;

  public setQueryParams(entity: Entity): Params {
    return { [this.entityType]: entity.id };
  }
}
