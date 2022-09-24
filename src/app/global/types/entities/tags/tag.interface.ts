import { Entity } from '../entity';

export interface TagInterface extends Entity {
  readonly language: Language;
  readonly games_count: number;
  readonly image_background: string;
  readonly games: Entity[];
}

export enum Language {
  ENGLISH = 'eng',
  RUSSIAN = 'rus',
}
