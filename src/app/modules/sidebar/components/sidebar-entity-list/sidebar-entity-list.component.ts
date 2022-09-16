import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../../../../global/types/entities/entity';
import { RouterLinks } from '../../../../global/constants/router-links';
import { Params } from '@angular/router';
import { EntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ImageService } from '../../../../global/utils/services/image.service';

@Component({
  selector: 'app-sidebar-entity-list',
  templateUrl: './sidebar-entity-list.component.html',
  styleUrls: ['./sidebar-entity-list.component.scss'],
})
export class SidebarEntityListComponent implements OnInit {
  @Input('entity-type') public entityType!: string;
  @Input('entity-list') public entityList!: SidebarEntity[];

  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;
  public isCurrentEntityGenre!: boolean;

  constructor(
    private iconService: IconService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.isCurrentEntityGenre = EntityTypes.GENRES === this.entityType;
  }

  public setQueryParams(entity: Entity): Params {
    return { [this.entityType]: entity.id };
  }

  public getIconBySlug(slug: string): IconDefinition {
    return this.iconService.getIconBySlug(slug);
  }

  public getCroppedImage(imageUrl: string) {
    return this.imageService.getCroppedImage600x400(imageUrl);
  }
}

interface SidebarEntity extends Entity {
  readonly image_background?: string;
}
