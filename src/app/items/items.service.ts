import { Injectable } from '@angular/core';
import { BaseAPI } from '../classes/base-api';

@Injectable()
export class ItemsService extends BaseAPI {

  constructor() {
    super();
  }

  addItem(params) {
    return this.post('addItem', params);  }
}
