import { PublisherInterface } from './publisher.interface';

export interface PublisherDetailsInterface extends PublisherInterface {
  readonly description: string;
}
