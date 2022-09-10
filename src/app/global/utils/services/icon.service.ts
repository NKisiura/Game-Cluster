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
  faCircleQuestion,
  faDiceFive,
  faGamepad,
  faSpinner,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { MainEntitiesService } from './main-entities.service';
import * as _ from 'lodash';
import { EntityTypes } from '../../types/entities/entity-types.enum';

@Injectable()
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

  private getPlatformIconBySlug(platformSlug: string): IconDefinition {
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

  private getStoreIconBySlug(storeSlug: string): IconDefinition {
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
}
