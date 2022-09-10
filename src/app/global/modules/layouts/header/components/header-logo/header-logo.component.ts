import { Component } from '@angular/core';
import { RouterLinks } from '../../../../../constants/router-links';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss'],
})
export class HeaderLogoComponent {
  public logoLink: string = RouterLinks.BASE_ROUTE;
}
