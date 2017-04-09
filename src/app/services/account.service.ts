import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  readonly tokenKey = 'token';
  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey);
  }
}
