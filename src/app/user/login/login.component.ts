import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  messages = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.login({
      email: this.email,
      password: this.password
    }).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.messages = [
        {
          severity: 'success',
          detail: 'You have logged in successfully.'
        }
      ];
      window.setTimeout(() => {
        location.reload();
        this.router.navigate(['/items']);
      }, 2000);
    }, err => {
      this.messages = [
        {
          severity: 'error',
          summary: 'Error:',
          detail: err.json().message
        }
      ];
    });
  }
}
