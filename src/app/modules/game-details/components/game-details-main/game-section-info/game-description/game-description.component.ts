import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GameDescriptionComponent implements OnInit {
  @Input('description') public description!: string;
  @Input('description-raw') public descriptionRaw!: string;
  public isDescriptionOpened!: boolean;
  public descriptionPreviewLength: number = 500;

  ngOnInit(): void {
    this.isDescriptionOpened =
      this.description.length < this.descriptionPreviewLength;
  }

  public getSlicedDescriptionRaw(descriptionRaw: string): string {
    return descriptionRaw.slice(0, this.descriptionPreviewLength) + '... ';
  }
}
