import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollUpButtonComponent } from './components/scroll-up-button/scroll-up-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ScrollUpButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ScrollUpButtonComponent],
})
export class ScrollUpButtonModule {}
