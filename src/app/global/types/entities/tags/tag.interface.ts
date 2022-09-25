import { NotGameEntity } from '../not-game-entity';

export interface TagInterface extends NotGameEntity {
  readonly language: Language;
}

export enum Language {
  ENGLISH = 'eng',
  RUSSIAN = 'rus',
}
