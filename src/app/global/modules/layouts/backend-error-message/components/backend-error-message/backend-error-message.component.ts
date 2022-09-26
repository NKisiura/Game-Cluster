import { Component, Input } from '@angular/core';
import { BackendErrorResponseInterface } from '../../../../../../state/types/backend-error-response.interface';

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss'],
})
export class BackendErrorMessageComponent {
  @Input('error') public error!: BackendErrorResponseInterface;

  public isErrorTypeOfString(): boolean {
    return typeof this.error.error === 'string';
  }
}
