import { Entity } from '../entity';
import { PlatformInterface } from './platform.interface';

export interface ParentPlatformInterface extends Entity {
  readonly platforms: PlatformInterface[];
}
