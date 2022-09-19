import { TagInterface } from '../../../../global/types/entities/tags/tag.interface';

export interface GetTagsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: TagInterface[] | null;
}
