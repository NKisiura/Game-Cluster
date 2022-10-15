import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export interface AppStateInterface {
  readonly totalGamesCount: {
    isLoading: boolean;
    error: BackendErrorResponseInterface | null;
    data: number | null;
  };
}
