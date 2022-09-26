import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StoresService } from '../services/stores.service';
import { StoresActions } from '../actions/stores.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetStoresResponseInterface } from '../types/get-stores-response.interface';

@Injectable()
export class StoresEffect {
  public getStores$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoresActions.getStores),
      switchMap(({ url }) => {
        return this.storesService.getStores(url).pipe(
          map((getStoresResponse: GetStoresResponseInterface) =>
            StoresActions.getStoresSuccess({ getStoresResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(StoresActions.getStoreFailure({ error }))
          )
        );
      })
    );
  });

  public getStoresNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.getStoresNextPage),
      switchMap(({ url }) => {
        return this.storesService.getStoresNextPage(url).pipe(
          map((getStoresResponse: GetStoresResponseInterface) =>
            StoresActions.getStoresNextPageSuccess({ getStoresResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(StoresActions.getStoresNextPageFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private storesService: StoresService
  ) {}
}
