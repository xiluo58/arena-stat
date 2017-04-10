import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CustomFormsModule } from 'ng2-validation';
import {MessagesModule} from 'primeng/primeng';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInfoComponent } from './profile/personal-info/personal-info.component';


@NgModule({
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    CustomFormsModule,
    MaterialModule,
    MessagesModule,
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
