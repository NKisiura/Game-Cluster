import { Component, Input } from '@angular/core';
import { RouterLinks } from '../../../../../global/constants/router-links';
import GAME_ROUTER_LINK = RouterLinks.GAME_ROUTER_LINK;
import { Entity } from '../../../../../global/types/entities/entity';
import { NotGameEntity } from '../../../../../global/types/entities/not-game-entity';

@Component({
  selector: 'app-entity-card-items',
  templateUrl: './entity-card-items.component.html',
})
export class EntityCardItemsComponent {
  public gameRouterLink = GAME_ROUTER_LINK;
  @Input('entity-items-title') public entityItemsTitle: string =
    'Popular items';
  @Input('entity') public entity!: NotGameEntity;

  public getFirstThreeGamesFromGameList(gameList: Entity[]): Entity[] {
    return gameList.slice(0, 3);
  }
}
