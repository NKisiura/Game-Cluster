import { GetPlatformsResponseInterface } from './get-platforms-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export interface PlatformsStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetPlatformsResponseInterface | null;
}
