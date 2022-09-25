import { Component, Input } from '@angular/core';
import { NotGameEntity } from '../../../../global/types/entities/not-game-entity';
import { RouterLinks } from '../../../../global/constants/router-links';
import { Entity } from '../../../../global/types/entities/entity';
import { Params } from '@angular/router';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { ImageService } from '../../../../global/utils/services/image.service';
import GAMES_ROUTER_LINK = RouterLinks.GAMES_ROUTER_LINK;

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
})
export class EntityCardComponent {
  public gamesRouterLink = GAMES_ROUTER_LINK;

  @Input('entity') public entity!: NotGameEntity;
  @Input('entityType') public entityType!: NotGamesEntityTypes;

  constructor(private readonly imageService: ImageService) {}

  public setQueryParams(
    entityType: NotGamesEntityTypes,
    entity: Entity
  ): Params {
    return { [entityType]: entity.id };
  }

  public getCroppedImage(imageUrl: string): string {
    return this.imageService.getCroppedImage600x400(imageUrl);
  }

  public getBackgroundImageStyle(colorRGB: string, imageUrl: string): string {
    return `linear-gradient(rgba(${colorRGB}, 0.5), rgb(${colorRGB}) 70%), url(${imageUrl})`;
  }
}
