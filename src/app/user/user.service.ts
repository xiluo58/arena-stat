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
}
