import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../../global/utils/services/icon.service';

@Component({
  selector: 'app-game-card-show-more-button',
  templateUrl: './game-card-show-more-button.component.html',
})
export class GameCardShowMoreButtonComponent {
  constructor(private readonly iconService: IconService) {}

  public getArrowRightIcon(): IconDefinition {
    return this.iconService.getArrowIcons().right;
  }
}
