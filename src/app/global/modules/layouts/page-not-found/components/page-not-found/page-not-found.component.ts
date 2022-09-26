import { Component } from '@angular/core';
import { RouterLinks } from '../../../../../constants/router-links';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  public baseRouterLink: string = RouterLinks.BASE_ROUTE;
}
