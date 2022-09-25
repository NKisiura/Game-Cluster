import { Component } from '@angular/core';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import {
  ArrowIconsKit,
  IconService,
} from '../../../../global/utils/services/icon.service';
import { RouterLinks } from '../../../../global/constants/router-links';
import BROWSE_ROUTER_LINK = RouterLinks.BROWSE_ROUTER_LINK;
import { BrowseService } from '../../services/browse.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent {
  public browseRouterLink = BROWSE_ROUTER_LINK;
  public entityTypesList: string[] = Object.values(NotGamesEntityTypes);

  constructor(
    private readonly iconService: IconService,
    private readonly browseService: BrowseService
  ) {}

  public getEntityViewModelByEntityType(entityType: NotGamesEntityTypes) {
    return this.browseService.getEntityViewModelByEntityType(entityType);
  }

  public getArrowIcons(): ArrowIconsKit {
    return this.iconService.getArrowIcons();
  }

  public getFirstFiveEntityFromList<T>(entityList: T[]): T[] {
    return entityList.slice(0, 5);
  }
}
