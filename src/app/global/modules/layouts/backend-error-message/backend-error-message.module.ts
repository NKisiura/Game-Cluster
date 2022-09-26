import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessageComponent } from './components/backend-error-message/backend-error-message.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackendErrorMessageComponent],
  imports: [CommonModule, RouterModule],
  exports: [BackendErrorMessageComponent],
})
export class BackendErrorMessageModule {}
