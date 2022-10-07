import { Component, Input } from '@angular/core';
import { GenreInterface } from '../../../../../global/types/entities/genres/genre.interface';
import {
  Language,
  TagInterface,
} from '../../../../../global/types/entities/tags/tag.interface';
import { RouterLinks } from '../../../../../global/constants/router-links';
import { Entity } from '../../../../../global/types/entities/entity';
import { Params } from '@angular/router';
import { DateService } from '../../../../../global/utils/services/date.service';
import { NotGamesEntityTypes } from '../../../../../global/types/entities/entity-types.enum';

@Component({
  selector: 'app-game-card-details',
  templateUrl: './game-card-details.component.html',
})
export class GameCardDetailsComponent {
  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;

  @Input('release-date') public released!: string;
  @Input('genres-list') public genresList!: GenreInterface[];
  @Input('tag-list') public tagList!: TagInterface[];

  constructor(private readonly dateService: DateService) {}

  public getFormattedReleaseDate(): string {
    return this.dateService.changeDateFormat(this.released, 'll');
  }

  public getOnlyEnglishTagList(): TagInterface[] {
    return this.tagList.filter((tag) => tag.language === Language.ENGLISH);
  }

  public setQueryParams(
    entityType: NotGamesEntityTypes,
    entity: Entity
  ): Params {
    return { [entityType]: entity.slug };
  }

  public getAcceptableCountOfEntitiesToView(
    acceptableCount: number = 3,
    entityList: Entity[]
  ): Entity[] {
    return entityList.slice(0, acceptableCount);
  }

  public getCountOfRestEntities(
    acceptableCount: number = 3,
    entityList: Entity[]
  ): number {
    const countOfRestEntities = entityList.length - acceptableCount;
    return countOfRestEntities < 0 ? 0 : countOfRestEntities;
  }
}
