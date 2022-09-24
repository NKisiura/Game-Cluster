import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetPublishersResponseInterface } from './get-publishers-response.interface';

export interface PublishersStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetPublishersResponseInterface | null;
}
