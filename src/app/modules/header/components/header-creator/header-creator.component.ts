import { Component } from '@angular/core';
import { APP_GITHUB_LINK } from '../../../../global/constants/app-constant';

@Component({
  selector: 'app-header-creator',
  templateUrl: './header-creator.component.html',
  styleUrls: ['./header-creator.component.scss'],
})
export class HeaderCreatorComponent {
  public gitHubLink: string = APP_GITHUB_LINK;
}
