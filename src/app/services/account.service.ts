import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  private readonly tokenKey = 'token';
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

  getInfo() {
    const token = this.getToken();
    if (token) {
      let infoSeg = token.split('.')[1];
      let infoString = atob(infoSeg);
      return JSON.parse(infoString);
    } else {
      return token;
    }
  }
}
