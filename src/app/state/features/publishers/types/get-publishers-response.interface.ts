import { PublisherInterface } from '../../../../global/types/entities/publishers/publisher.interface';

export interface GetPublishersResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: PublisherInterface[] | null;
}
