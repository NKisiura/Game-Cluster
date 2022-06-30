import { GetPlatformsResponseInterface } from './get-platforms-response.interface';

export interface PlatformsStateInterface {
  readonly isLoading: boolean;
  readonly error: boolean;
  readonly data: GetPlatformsResponseInterface | null;
}
