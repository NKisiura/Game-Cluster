import { Component } from '@angular/core';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent {
  public searchQuery: string = '';

  constructor(private readonly iconService: IconService) {}

  public getSearchIcon(): IconDefinition {
    return this.iconService.searchIcon;
  }

  public getXMarkIcon(): IconDefinition {
    return this.iconService.xMarkIcon;
  }

  public cleanSearchQuery(): void {
    this.searchQuery = '';
  }
}
