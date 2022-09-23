import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { fromEvent, skip, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-scroll-down-emitter',
  template: '',
})
export class ScrollDownEmitterComponent implements AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Output('scroll-down') private scrollDown = new EventEmitter<void>();

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
      .pipe(skip(1), takeUntil(this.unsubscribe$))
      .subscribe(() => this.scrollEvent());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private scrollEvent(): void {
    const scrollHeight = document.scrollingElement!.scrollHeight;
    const scrollTop = document.scrollingElement!.scrollTop;
    const clientHeight = document.scrollingElement!.clientHeight;

    if (scrollHeight - (scrollTop + clientHeight) < 35) {
      this.scrollDown.emit();
    }
  }
}
