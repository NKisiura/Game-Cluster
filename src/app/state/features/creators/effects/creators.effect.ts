import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreatorsService } from '../services/creators.service';
import { CreatorsActions } from '../actions/creators.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetCreatorsResponseInterface } from '../types/get-creators-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class CreatorsEffect {
  public getCreators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatorsActions.getCreators),
      switchMap(({ url }) => {
        return this.creatorsService.getCreators(url).pipe(
          map((getCreatorsResponse: GetCreatorsResponseInterface) =>
            CreatorsActions.getCreatorsSuccess({ getCreatorsResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(CreatorsActions.getCreatorsFailure({ error }))
          )
        );
      })
    )
  );

  public getCreatorsNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatorsActions.getCreatorsNextPage),
      switchMap(({ url }) => {
        return this.creatorsService.getCreatorsNextPage(url).pipe(
          map((getCreatorsResponse: GetCreatorsResponseInterface) =>
            CreatorsActions.getCreatorsNextPageSuccess({
              getCreatorsResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(CreatorsActions.getCreatorsNextPageFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private creatorsService: CreatorsService
  ) {}
}
