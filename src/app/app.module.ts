import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

import { ConfigModule, ConfigLoader, ConfigHttpLoader } from '@nglibs/config';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

export function configFactory(http: Http): ConfigLoader {
  return new ConfigHttpLoader(http, '/assets/config.json'); // FILE PATH || API ENDPOINT
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
