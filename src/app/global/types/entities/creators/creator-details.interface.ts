import { CreatorInterface } from './creator.interface';

export interface CreatorDetailsInterface extends CreatorInterface {
  readonly description: string;
}
