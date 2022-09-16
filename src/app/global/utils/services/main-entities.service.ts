import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainEntitiesService {
  private mainPlatformsList: string[] = [
    'pc',
    'playstation4',
    'xbox-one',
    'ios',
    'android',
    'macos',
    'linux',
  ];

  private mainGenresList: string[] = [
    'action',
    'strategy',
    'role-playing-games-rpg',
    'shooter',
    'adventure',
    'racing',
    'indie',
  ];

  private mainStoresList: string[] = [
    'steam',
    'playstation-store',
    'xbox-store',
    'apple-appstore',
    'google-play',
    'epic-games',
    'gog',
  ];

  public getMainPlatformsList(): string[] {
    return this.mainPlatformsList;
  }

  public getMainGenresList(): string[] {
    return this.mainGenresList;
  }

  public getMainStoresList(): string[] {
    return this.mainStoresList;
  }

  public getMainEntitiesModel(): { [key: string]: string[] } {
    return {
      platforms: this.mainPlatformsList,
      genres: this.mainGenresList,
      stores: this.mainStoresList,
    };
  }
}
