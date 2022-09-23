import { Entity } from '../entity';
import { DeveloperInterface } from './developer.interface';

export interface DeveloperDetailsInterface extends Entity, DeveloperInterface {
  readonly description: string;
}
