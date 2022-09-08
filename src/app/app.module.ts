import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderModule } from './global/modules/layouts/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { StateModule } from './state/state.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from './global/interceptors/api-key-interceptor';
import { GameListModule } from './modules/game-list/game-list.module';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { GameDetailsModule } from './modules/game-details/game-details.module';
import { PageNotFoundModule } from './global/modules/layouts/page-not-found/page-not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ router: routerReducer }, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HeaderModule,
    SidebarModule,
    GameListModule,
    GameDetailsModule,
    StateModule,
    NgProgressModule,
    NgProgressHttpModule,
    PageNotFoundModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
