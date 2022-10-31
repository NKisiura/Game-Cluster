import { Injectable } from '@angular/core';
import {
  faApple,
  faAppStoreIos,
  faChrome,
  faGoodreads,
  faGooglePlay,
  faLinux,
  faPlaystation,
  faSteam,
  faWindows,
  faXbox,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDownLong,
  faArrowLeftLong,
  faArrowRightLong,
  faArrowUpLong,
  faBan,
  faBars,
  faBookOpen,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleQuestion,
  faCode,
  faCrown,
  faDiceFive,
  faDownload,
  faEllipsis,
  faForwardFast,
  faGamepad,
  faGhost,
  faHashtag,
  faPlay,
  faSearch,
  faSpinner,
  faStar,
  faTrophy,
  faUser,
  faWarning,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { MainEntitiesService } from './main-entities.service';
import * as _ from 'lodash';
import { EntityTypes } from '../../types/entities/entity-types.enum';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { GameCollection } from '../../../modules/game-collection/types/game-collection.enum';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  public undefinedIcon = faCircleQuestion;
  public loadingIcon = faSpinner;
  public warningIcon = faWarning;
  public undefinedImageIcon = faImage;

  public windowsIcon = faWindows;
  public playstationIcon = faPlaystation;
  public xboxIcon = faXbox;
  public iosIcon = faAppStoreIos;
  public androidIcon = faGooglePlay;
  public macIcon = faApple;
  public linuxIcon = faLinux;
  public nintendoIcon = faGamepad;
  public webIcon = faChrome;

  public steamIcon = faSteam;
  public gogIcon = faGoodreads;
  public epicGamesStoreIcon = faDiceFive;

  public gamepadIcon = faGamepad;
  public downloadIcon = faDownload;
  public ghostIcon = faGhost;
  public userIcon = faUser;
  public hashtagIcon = faHashtag;
  public codeIcon = faCode;
  public bookIcon = faBookOpen;

  public trophyIcon = faTrophy;
  public crownIcon = faCrown;
  public starIcon = faStar;
  public nextIcon = faForwardFast;

  public arrowUpIcon = faChevronUp;
  public arrowRightIcon = faChevronRight;
  public arrowDownIcon = faChevronDown;
  public arrowLeftIcon = faChevronLeft;

  public longArrowUpIcon = faArrowUpLong;
  public longArrowRightIcon = faArrowRightLong;
  public longArrowDownIcon = faArrowDownLong;
  public longArrowLeftIcon = faArrowLeftLong;

  public ellipsisIcon = faEllipsis;

  public youtubeIcon = faYoutube;

  public playIcon = faPlay;

  public searchIcon = faSearch;
  public xMarkIcon = faXmark;
  public banIcon = faBan;
  public barsIcon = faBars;

  constructor(private mainEntitiesService: MainEntitiesService) {}

  public getLoadingIcon(): IconDefinition {
    return this.loadingIcon;
  }

  public getUndefinedIcon(): IconDefinition {
    return this.undefinedIcon;
  }

  public getWarningIcon(): IconDefinition {
    return this.warningIcon;
  }

  public getArrowIcons(): ArrowIconsKit {
    return {
      up: this.arrowUpIcon,
      right: this.arrowRightIcon,
      left: this.arrowLeftIcon,
      down: this.arrowDownIcon,
    };
  }

  public getLongArrowIcons(): ArrowIconsKit {
    return {
      up: this.longArrowUpIcon,
      right: this.longArrowRightIcon,
      left: this.longArrowLeftIcon,
      down: this.longArrowDownIcon,
    };
  }

  public getIconBySlug(slug: string): IconDefinition {
    const entityType = this.defineEntityTypeBySlug(slug);
    switch (entityType) {
      case EntityTypes.PLATFORMS: {
        return this.getPlatformIconBySlug(slug);
      }
      case EntityTypes.STORES: {
        return this.getStoreIconBySlug(slug);
      }
      default: {
        return this.getUndefinedIcon();
      }
    }
  }

  private defineEntityTypeBySlug(slug: string): string | undefined {
    const mainEntitiesModel = this.mainEntitiesService.getMainEntitiesModel();
    return _.findKey(mainEntitiesModel, (entityList: string[]) =>
      entityList.includes(slug)
    );
  }

  public getPlatformIconBySlug(platformSlug: string): IconDefinition {
    switch (platformSlug) {
      case 'pc': {
        return this.windowsIcon;
      }
      case 'playstation': {
        return this.playstationIcon;
      }
      case 'playstation5': {
        return this.playstationIcon;
      }
      case 'playstation4': {
        return this.playstationIcon;
      }
      case 'playstation3': {
        return this.playstationIcon;
      }
      case 'playstation2': {
        return this.playstationIcon;
      }
      case 'playstation1': {
        return this.playstationIcon;
      }
      case 'xbox': {
        return this.xboxIcon;
      }
      case 'xbox-one': {
        return this.xboxIcon;
      }
      case 'xbox-series-x': {
        return this.xboxIcon;
      }
      case 'xbox360': {
        return this.xboxIcon;
      }
      case 'xbox-old': {
        return this.xboxIcon;
      }
      case 'ios': {
        return this.iosIcon;
      }
      case 'android': {
        return this.androidIcon;
      }
      case 'macos': {
        return this.macIcon;
      }
      case 'mac': {
        return this.macIcon;
      }
      case 'linux': {
        return this.linuxIcon;
      }
      case 'nintendo': {
        return this.nintendoIcon;
      }
      case 'web': {
        return this.webIcon;
      }
      default: {
        return this.getUndefinedIcon();
      }
    }
  }

  public getStoreIconBySlug(storeSlug: string): IconDefinition {
    switch (storeSlug) {
      case 'xbox-store': {
        return this.xboxIcon;
      }
      case 'steam': {
        return this.steamIcon;
      }
      case 'gog': {
        return this.gogIcon;
      }
      case 'xbox360': {
        return this.xboxIcon;
      }
      case 'google-play': {
        return this.androidIcon;
      }
      case 'apple-appstore': {
        return this.iosIcon;
      }
      case 'nintendo': {
        return this.nintendoIcon;
      }
      case 'playstation-store': {
        return this.playstationIcon;
      }
      case 'epic-games': {
        return this.epicGamesStoreIcon;
      }
      default: {
        return this.getUndefinedIcon();
      }
    }
  }

  public getEntityTypeIconBySlug(entitySlug: string): IconDefinition {
    switch (entitySlug) {
      case 'platforms': {
        return this.gamepadIcon;
      }
      case 'genres': {
        return this.ghostIcon;
      }
      case 'stores': {
        return this.downloadIcon;
      }
      case 'creators': {
        return this.userIcon;
      }
      case 'tags': {
        return this.hashtagIcon;
      }
      case 'developers': {
        return this.codeIcon;
      }
      case 'publishers': {
        return this.bookIcon;
      }
      default: {
        return this.getUndefinedIcon();
      }
    }
  }

  public getGameCollectionIconBySlug(
    gameCollectionSlug: GameCollection
  ): IconDefinition {
    switch (gameCollectionSlug) {
      case GameCollection.LAST_30_DAYS: {
        return this.starIcon;
      }
      case GameCollection.NEXT_WEEK: {
        return this.nextIcon;
      }
      case GameCollection.ALL_TIME_TOP: {
        return this.crownIcon;
      }
      case GameCollection.BEST_OF_THE_YEAR: {
        return this.trophyIcon;
      }
    }
  }
}

export interface ArrowIconsKit {
  up: IconDefinition;
  right: IconDefinition;
  down: IconDefinition;
  left: IconDefinition;
}
