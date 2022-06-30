import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlatformsService } from '../services/platforms.service';
import { PlatformsActions } from '../actions/platforms.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetPlatformsResponseInterface } from '../types/get-platforms-response.interface';

@Injectable()
export class PlatformsEffect {
  public getPlatforms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlatformsActions.getPlatforms),
      switchMap(({ url }) => {
        return this.platformsService.getPlatforms(url).pipe(
          map((getPlatformsResponse: GetPlatformsResponseInterface) =>
            PlatformsActions.getPlatformsSuccess({ getPlatformsResponse })
          ),
          catchError(() => of(PlatformsActions.getPlatformsFailure()))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private platformsService: PlatformsService
  ) {}
}
