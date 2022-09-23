import { DeveloperInterface } from '../../../../global/types/entities/developers/developer.interface';

export interface GetDevelopersResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: DeveloperInterface[] | null;
}
