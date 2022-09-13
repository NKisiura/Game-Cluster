import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [style({ opacity: '1' })]),
      transition(':leave', [animate(250, style({ opacity: '0' }))]),
    ]),
  ],
})
export class AppLoaderComponent {
  @Input('loading') public loading!: boolean;
}
