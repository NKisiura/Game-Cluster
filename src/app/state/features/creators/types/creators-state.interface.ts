import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetCreatorsResponseInterface } from './get-creators-response.interface';

export interface CreatorsStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetCreatorsResponseInterface | null;
}
