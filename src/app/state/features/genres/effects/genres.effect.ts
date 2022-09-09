import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GenresService } from '../services/genres.service';
import { GenresActions } from '../actions/genres.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetGenresResponseInterface } from '../types/get-genres-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GenresEffect {
  public getGenres$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GenresActions.getGenres),
      switchMap(({ url }) => {
        return this.genresService.getGenres(url).pipe(
          map((getGenresResponse: GetGenresResponseInterface) =>
            GenresActions.getGenresSuccess({ getGenresResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GenresActions.getGenresFailure({ error }))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private genresService: GenresService
  ) {}
}
