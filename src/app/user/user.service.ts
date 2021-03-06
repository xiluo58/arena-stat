import { Injectable } from '@angular/core';
import { BaseAPI } from '../classes/base-api';

@Injectable()
export class UserService extends BaseAPI {

  constructor() {
    super();
  }

  login(parameter) {
    return this.post('login', parameter);
  }

  register(params) {
    return this.post('register', params);
  }

  updateInfo(params) {
    return this.post('userInfo', params);
  }

  getInfo() {
    return this.get('userInfo');
  }

  getFavoriteItems() {
    return this.get('favoriteItems');
  }
}
