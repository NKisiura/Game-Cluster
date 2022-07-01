import { Entity } from '../entity';
import { PlatformInterface } from './platform.interface';

export interface PlatformDetailsInterface extends Entity, PlatformInterface {
  readonly description: string;
}
