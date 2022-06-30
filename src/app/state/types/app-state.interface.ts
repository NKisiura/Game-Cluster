import { PlatformsStateInterface } from '../features/platforms/types/platforms-state.interface';

export interface AppStateInterface {
  readonly platforms: PlatformsStateInterface;
}
