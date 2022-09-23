import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetDevelopersResponseInterface } from './get-developers-response.interface';

export interface DevelopersStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetDevelopersResponseInterface | null;
}
