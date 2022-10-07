import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessageComponent } from './components/backend-error-message/backend-error-message.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BackendErrorMessageComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [BackendErrorMessageComponent],
})
export class BackendErrorMessageModule {}
