import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
})
export class LoadMoreButtonComponent {
  @Output('load-more-button-clicked')
  private emitClickEvent: EventEmitter<void> = new EventEmitter<void>();

  public click(): void {
    this.emitClickEvent.emit();
  }
}
