import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { map, skip, Subject, takeUntil } from 'rxjs';
import { NgProgressComponent } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  @ViewChild('progressComponent')
  public progressComponent!: NgProgressComponent;
  public isFirstInit: boolean = true;
  public appLoading: boolean = true;
  private appLoadingEnd$: Subject<void> = new Subject<void>();

  ngAfterViewChecked(): void {
    if (this.isFirstInit) {
      this.isFirstInit = false;
      this.progressComponent.state$
        .pipe(
          skip(1),
          map((state) => state.active),
          takeUntil(this.appLoadingEnd$)
        )
        .subscribe((status) => this.endLoading(status));
    }
  }

  private endLoading(loadingStatus: boolean): void {
    if (!loadingStatus) {
      this.appLoading = false;
      this.appLoadingEnd$.next();
      this.appLoadingEnd$.complete();
    }
  }
}
