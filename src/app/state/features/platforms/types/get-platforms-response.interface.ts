import { PlatformInterface } from '../../../../global/types/entities/platforms/platform.interface';

export interface GetPlatformsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: PlatformInterface[] | null;
}
