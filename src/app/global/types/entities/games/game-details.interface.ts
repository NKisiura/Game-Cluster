import { Entity } from '../entity';
import {
  GameClip,
  GameEsrbRating,
  GameParentPlatform,
  GamePlatform,
  GameStore,
} from './game.interface';
import { DeveloperInterface } from '../developers/developer.interface';
import { GenreInterface } from '../genres/genre.interface';
import { TagInterface } from '../tags/tag.interface';
import { PublisherInterface } from '../publishers/publisher.interface';

export interface GameDetailsInterface extends Entity {
  readonly name_original: string;
  readonly description: string;
  readonly description_raw: string;
  readonly released: string;
  readonly updated: string;
  readonly metacritic: number;
  readonly background_image: string;
  readonly background_image_additional: string;
  readonly website: string;
  readonly playtime: number;
  readonly screenshots_count: number;
  readonly movies_count: number;
  readonly creators_count: number;
  readonly achievements_count: number;
  readonly parent_achievements_count: number;
  readonly reddit_url: string;
  readonly reddit_name: string;
  readonly reddit_description: string;
  readonly reddit_logo: string;
  readonly reddit_count: number;
  readonly twitch_count: number;
  readonly youtube_count: number;
  readonly suggestions_count: number;
  readonly alternative_names: string[];
  readonly parents_count: number;
  readonly additions_count: number;
  readonly game_series_count: number;
  readonly parent_platforms: GameParentPlatform[];
  readonly platforms: GamePlatform[];
  readonly stores: GameStore[];
  readonly developers: DeveloperInterface[];
  readonly genres: GenreInterface[];
  readonly tags: TagInterface[];
  readonly publishers: PublisherInterface[];
  readonly clip: GameClip | null;
  readonly esrb_rating: GameEsrbRating | null;
}
