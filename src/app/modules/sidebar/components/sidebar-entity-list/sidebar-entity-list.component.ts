import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../../../../global/types/entities/entity';
import { RouterLinks } from '../../../../global/constants/router-links';
import { Params } from '@angular/router';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ImageService } from '../../../../global/utils/services/image.service';
import { NotGameEntity } from '../../../../global/types/entities/not-game-entity';

@Component({
  selector: 'app-sidebar-entity-list',
  templateUrl: './sidebar-entity-list.component.html',
  styleUrls: ['./sidebar-entity-list.component.scss'],
})
export class SidebarEntityListComponent implements OnInit {
  @Input('entity-type') public entityType!: NotGamesEntityTypes;
  @Input('entity-list') public entityList!: NotGameEntity[];

  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;
  public isCurrentEntityGenre!: boolean;

  constructor(
    private readonly iconService: IconService,
    private readonly imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.isCurrentEntityGenre = NotGamesEntityTypes.GENRES === this.entityType;
  }

  public setQueryParams(
    entityType: NotGamesEntityTypes,
    entity: Entity
  ): Params {
    return { [entityType]: entity.id };
  }

  public getIconBySlug(slug: string): IconDefinition {
    return this.iconService.getIconBySlug(slug);
  }

  public getCroppedImage(imageUrl: string) {
    return this.imageService.getCroppedImage80(imageUrl);
  }
}
