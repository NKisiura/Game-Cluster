import { Component } from '@angular/core';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { RouterLinks } from '../../../../global/constants/router-links';

@Component({
  selector: 'app-sidebar-browse-list',
  templateUrl: 'sidebar-browse-list.component.html',
})
export class SidebarBrowseListComponent {
  public browseRouterLink: string = RouterLinks.BROWSE_ROUTER_LINK;
  public entityTypes = Object.values(NotGamesEntityTypes);

  constructor(private iconService: IconService) {}

  public getIconBySlug(slug: string): IconDefinition {
    return this.iconService.getEntityTypeIconBySlug(slug);
  }
}
