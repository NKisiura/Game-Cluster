import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';

export interface GameSearchStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetGamesResponseInterface | null;
}
