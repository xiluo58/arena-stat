import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CustomFormsModule } from 'ng2-validation';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    CustomFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  declarations: [LoginComponent, RegisterComponent],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
