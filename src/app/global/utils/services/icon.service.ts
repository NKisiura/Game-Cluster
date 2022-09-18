import { Injectable } from '@angular/core';
import {
  faApple,
  faAppStoreIos,
  faGoodreads,
  faGooglePlay,
  faLinux,
  faPlaystation,
  faSteam,
  faWindows,
  faXbox,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBookOpen,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleQuestion,
  faCode,
  faDiceFive,
  faDownload,
  faGamepad,
  faGhost,
  faHashtag,
  faPlay,
  faSpinner,
  faUser,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { MainEntitiesService } from './main-entities.service';
import * as _ from 'lodash';
import { EntityTypes } from '../../types/entities/entity-types.enum';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  public undefinedIcon = faCircleQuestion;
  public loadingIcon = faSpinner;
  public warningIcon = faWarning;

  public windowsIcon = faWindows;
  public playstationIcon = faPlaystation;
  public xboxIcon = faXbox;
  public iosIcon = faAppStoreIos;
  public androidIcon = faGooglePlay;
  public macIcon = faApple;
  public linuxIcon = faLinux;
  public nintendoIcon = faGamepad;

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

  public arrowUpIcon = faChevronUp;
  public arrowRightIcon = faChevronRight;
  public arrowDownIcon = faChevronDown;
  public arrowLeftIcon = faChevronLeft;

  public playIcon = faPlay;

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
}

export interface ArrowIconsKit {
  up: IconDefinition;
  right: IconDefinition;
  down: IconDefinition;
  left: IconDefinition;
}
