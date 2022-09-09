import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetStoresResponseInterface } from './get-stores-response.interface';

export interface StoresStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetStoresResponseInterface | null;
}
