import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyResultMessageComponent } from './components/empty-result-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [EmptyResultMessageComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [EmptyResultMessageComponent],
})
export class EmptyResultMessageModule {}
