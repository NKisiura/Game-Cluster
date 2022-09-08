import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGenresResponseInterface } from './get-genres-response.interface';

export interface GenresStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetGenresResponseInterface | null;
}
