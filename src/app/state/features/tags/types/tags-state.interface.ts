import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetTagsResponseInterface } from './get-tags-response.interface';

export interface TagsStateInterface {
  readonly isLoading: boolean;
  readonly error: BackendErrorResponseInterface | null;
  readonly data: GetTagsResponseInterface | null;
}
