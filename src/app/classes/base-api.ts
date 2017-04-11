import { ConfigService } from '@nglibs/config';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AccountService } from '../services/account.service';

export class BaseAPI {
  static injector: Injector;

  protected apiUrlPrefix: string;
  private http: Http;
  private accountService: AccountService;

  constructor() {
    this.apiUrlPrefix = BaseAPI.injector.get(ConfigService).getSettings('apiUrlPrefix');
    this.http = BaseAPI.injector.get(Http);
    this.accountService = BaseAPI.injector.get(AccountService);
  }

  getBodyObject(res) {
    return res.json() || {};
  }

  getDefaultHeaders(): Headers {
    const headers = new Headers();
    headers.set('content-type', 'application/json');
    const token = this.accountService.getToken();
    if (token) {
      headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  post(url, params, options?) {
    let postBody: string;
    if (typeof params === 'string') {
      postBody = params;
    } else {
      postBody = JSON.stringify(params);
    }
    const headers = this.getDefaultHeaders();
    return this.http.post(this.apiUrlPrefix + url, postBody, {headers: headers}).map(
      res => {
        return this.getBodyObject(res);
      },
      err => {
        return err;
      }
    );

  }

  get(url, searchParams?: URLSearchParams) {
    const headers = this.getDefaultHeaders();
    return this.http.get(
      this.apiUrlPrefix + url,
      {
        headers: headers,
        search: searchParams || ''
      }
    ).map(
      res => {
        return this.getBodyObject(res);
      },
      err => {
        return err;
      }
    );
  }
}
