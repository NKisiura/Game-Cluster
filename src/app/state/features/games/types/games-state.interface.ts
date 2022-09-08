import { GetGamesResponseInterface } from './get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export interface GamesStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetGamesResponseInterface | null;
}
