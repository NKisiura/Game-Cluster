import { Entity } from '../entity';
import { PlatformInterface } from '../platforms/platform.interface';
import { ParentPlatformInterface } from '../platforms/parent-platform.interface';
import { GenreInterface } from '../genres/genre.interface';
import { StoreInterface } from '../stores/store.interface';
import { TagInterface } from '../tags/tag.interface';

export interface GameInterface extends Entity {
  readonly released: string;
  readonly background_image: string;
  readonly metacritic: number;
  readonly platforms: GamePlatform[];
  readonly parent_platforms: GameParentPlatform[];
  readonly genres: GenreInterface[];
  readonly stores: GameStore[];
  readonly clip: GameClip | null;
  readonly tags: TagInterface[];
  readonly esrb_rating: GameEsrbRating | null;
  readonly short_screenshots: GameShortScreenshot[];
}

export interface GamePlatform {
  readonly platform: PlatformInterface;
  readonly released_at: string;
  readonly requirements_en: GamePlatformRequirements | null;
}

export interface GamePlatformRequirements {
  readonly minimum: string | null;
  readonly recommended: string | null;
}

export interface GameParentPlatform {
  readonly platform: ParentPlatformInterface;
}

export interface GameStore {
  readonly id: number;
  readonly url: string;
  readonly store: StoreInterface;
}

export interface GameClip {
  readonly clip: string;
  readonly clips: {
    320: string;
    640: string;
    full: string;
  };
  readonly video: string;
  readonly preview: string;
}

export interface GameEsrbRating {
  readonly id: number;
  readonly name: string;
  readonly slug: string;
}

export interface GameShortScreenshot {
  readonly id: number;
  readonly image: string;
}
