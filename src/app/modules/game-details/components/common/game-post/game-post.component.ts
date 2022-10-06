import { Component, Input } from '@angular/core';
import { GameRedditPostInterface } from '../../../../../global/types/entities/games/game-reddit-post.interface';
import { DateService } from '../../../../../global/utils/services/date.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-game-post',
  templateUrl: './game-post.component.html',
})
export class GamePostComponent {
  @Input('game-post') public gamePost!: GameRedditPostInterface;
  @Input('slice-post-name') public isNeedToSlicePostName: boolean = false;
  public slicedPostNameLength: number = 45;

  constructor(private readonly dateService: DateService) {}

  public getSlicedPostName(postName: string): string {
    if (postName.length > this.slicedPostNameLength) {
      return postName.slice(0, this.slicedPostNameLength) + '...';
    }
    return postName;
  }

  public getFormattedReleaseDate(date: string): string {
    return this.dateService.changeDateFormat(date, 'll');
  }

  public normalizeUserName(userName: string): string {
    return _.replace(userName, '/u/', '');
  }
}
