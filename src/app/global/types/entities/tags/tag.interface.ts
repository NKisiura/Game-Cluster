import { Entity } from '../entity';

export interface TagInterface extends Entity {
  readonly language: Language;
  readonly games_count: number;
  readonly image_background: string;
}

export enum Language {
  ENGLISH = 'eng',
  RUSSIAN = 'rus',
}
