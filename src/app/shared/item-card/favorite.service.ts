import { Injectable } from '@angular/core';
import { BaseAPI } from '../../classes/base-api';

@Injectable()
export class FavoriteService extends BaseAPI {

  constructor() {
    super();
  }

  favItem(id) {
    return this.post('favItem',
      {
        id: id
      });
  }

  unfavItem(id) {
    return this.post('unfavItem',
      {
        id: id
      });
  }

}
