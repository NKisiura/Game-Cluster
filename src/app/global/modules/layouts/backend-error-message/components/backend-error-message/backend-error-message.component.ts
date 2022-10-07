import { Component, Input } from '@angular/core';
import { BackendErrorResponseInterface } from '../../../../../../state/types/backend-error-response.interface';
import { IconService } from '../../../../../utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss'],
})
export class BackendErrorMessageComponent {
  @Input('error') public error!: BackendErrorResponseInterface;

  constructor(private readonly iconService: IconService) {}

  public isErrorTypeOfString(): boolean {
    return typeof this.error.error === 'string';
  }

  public getGhostIcon(): IconDefinition {
    return this.iconService.ghostIcon;
  }
}
