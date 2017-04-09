import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector } from '@angular/core';

import { ConfigModule, ConfigLoader, ConfigHttpLoader, ConfigService } from '@nglibs/config';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { ItemsModule } from './items/items.module';

import { BaseAPI } from './classes/base-api';
import { BroadcastService } from './services/broadcast.service';
import { AccountService } from './services/account.service';

export function configFactory(http: Http): ConfigLoader {
  return new ConfigHttpLoader(http, '/assets/config.json'); // FILE PATH || API ENDPOINT
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [Http]
    }),
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'
      }
    ])
  ],
  providers: [
    ConfigService,
    BroadcastService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    BaseAPI.injector = this.injector;
  }
}
