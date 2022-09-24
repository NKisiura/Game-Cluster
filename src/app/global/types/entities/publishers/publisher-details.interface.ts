import { Entity } from '../entity';
import { PublisherInterface } from './publisher.interface';

export interface PublisherDetailsInterface extends Entity, PublisherInterface {
  readonly description: string;
}
