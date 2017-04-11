import { Injectable } from '@angular/core';
import { BaseAPI } from '../classes/base-api';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class ItemsService extends BaseAPI {

  constructor() {
    super();
  }

  addItem(params) {
    return this.post('addItem', params);
  }

  getBrands() {
    return this.get('brandList');
  }

  getCountries() {
    return this.get('countryList');
  }

  getCategories() {
    return this.get('categoryList');
  }

  getItems() {
    return this.get('getItems');
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

  getItemDetail(id: string) {
    const searchParams = new URLSearchParams();
    searchParams.set('_id', id);
    return this.get('item', searchParams);
  }
}
