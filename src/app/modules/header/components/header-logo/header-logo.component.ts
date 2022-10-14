import { Component } from '@angular/core';
import { RouterLinks } from '../../../../global/constants/router-links';
import { APP_NAME } from '../../../../global/constants/app-constant';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss'],
})
export class HeaderLogoComponent {
  public appName: string = APP_NAME;
  public logoLink: string = RouterLinks.BASE_ROUTE;
}
