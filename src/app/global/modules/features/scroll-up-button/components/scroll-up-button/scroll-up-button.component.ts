import { AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';
import { IconService } from '../../../../../utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
})
export class ScrollUpButtonComponent implements AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  public showScrollUp: boolean = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly iconService: IconService
  ) {}

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.defineScrollUpDisplay());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private defineScrollUpDisplay(): void {
    this.showScrollUp = this.document.scrollingElement!.scrollTop > 50;
  }

  public getArrowUpIcon(): IconDefinition {
    return this.iconService.getArrowIcons().up;
  }

  public scrollUp(): void {
    window.scroll({ behavior: 'smooth', top: 0 });
  }
}
