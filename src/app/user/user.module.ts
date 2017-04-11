import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CustomFormsModule } from 'ng2-validation';
import {MessagesModule} from 'primeng/primeng';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInfoComponent } from './profile/personal-info/personal-info.component';
import { FavoriteItemsComponent } from './profile/favorite-items/favorite-items.component';

import { ItemsModule } from '../items/items.module';


@NgModule({
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    CustomFormsModule,
    SharedModule,
    MaterialModule,
    MessagesModule,
    ItemsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ])
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FavoriteItemsComponent,
    PersonalInfoComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
