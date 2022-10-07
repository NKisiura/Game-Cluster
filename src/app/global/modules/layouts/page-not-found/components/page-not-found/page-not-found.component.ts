import { Component } from '@angular/core';
import { RouterLinks } from '../../../../../constants/router-links';
import { IconService } from '../../../../../utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  public baseRouterLink: string = RouterLinks.BASE_ROUTE;

  constructor(private readonly iconService: IconService) {}

  public getGhostIcon(): IconDefinition {
    return this.iconService.ghostIcon;
  }

  public getLongArrowLeftIcon(): IconDefinition {
    return this.iconService.getLongArrowIcons().left;
  }
}
