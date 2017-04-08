import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  messages: any[];
  email: string;
  password: string;
  repeatPassword: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const params = {
      email: this.email,
      password: this.password
    };
    this.userService.register(params).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.messages = [
          {
            severity: 'success',
            detail: 'You have registered successfully!'
          }
        ];
      },
      err => {
        this.messages = [
          {
            severity: 'error',
            summary: 'Error',
            detail: err.json().message
          }
        ];
      }
    );
  }
}
