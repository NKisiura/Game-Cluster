import { Component } from '@angular/core';
import { IconService } from '../../../../utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-empty-result-message',
  templateUrl: './empty-result-message.component.html',
  styleUrls: ['./empty-result-message.component.scss'],
})
export class EmptyResultMessageComponent {
  constructor(private readonly iconService: IconService) {}

  public getGhostIcon(): IconDefinition {
    return this.iconService.ghostIcon;
  }
}
