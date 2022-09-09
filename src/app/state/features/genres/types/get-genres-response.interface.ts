import { GenreInterface } from '../../../../global/types/entities/genres/genre.interface';

export interface GetGenresResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: GenreInterface[] | null;
}
