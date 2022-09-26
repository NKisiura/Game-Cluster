import { PlatformInterface } from './platform.interface';

export interface PlatformDetailsInterface extends PlatformInterface {
  readonly description: string;
}
