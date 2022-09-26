import { Injectable } from '@angular/core';
import { TagsService } from '../services/tags.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TagsActions } from '../actions/tags.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetTagsResponseInterface } from '../types/get-tags-response.interface';

@Injectable()
export class TagsEffect {
  public getTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TagsActions.getTags),
      switchMap(({ url }) => {
        return this.tagsService.getTags(url).pipe(
          map((getTagsResponse: GetTagsResponseInterface) =>
            TagsActions.getTagsSuccess({ getTagsResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(TagsActions.getTagsFailure({ error }))
          )
        );
      })
    )
  );

  public getTagsNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TagsActions.getTagsNextPage),
      switchMap(({ url }) => {
        return this.tagsService.getTagsNextPage(url).pipe(
          map((getTagsResponse: GetTagsResponseInterface) =>
            TagsActions.getTagsNextPageSuccess({ getTagsResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(TagsActions.getTagsNextPageFailure({ error }))
          )
        );
      })
    )
  );
  constructor(private actions$: Actions, private tagsService: TagsService) {}
}
