import { CreatorInterface } from '../../../../global/types/entities/creators/creator.interface';

export interface GetCreatorsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: CreatorInterface[] | null;
}
