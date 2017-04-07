import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@nglibs/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private readonly config: ConfigService
  ) {
    console.log(this.config.getSettings());
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.email, this.password);
  }
}
