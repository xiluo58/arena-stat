import { ConfigService } from '@nglibs/config';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class BaseAPI {
  static injector: Injector;

  protected apiUrlPrefix: string;
  private http: Http;

  constructor(
  ) {
    this.apiUrlPrefix = BaseAPI.injector.get(ConfigService).getSettings('apiUrlPrefix');
    this.http = BaseAPI.injector.get(Http);
  }

  getBodyObject(res) {
    return res.json() || {};
  }

  post(url, params, options?) {
    let postBody: string;
    if (typeof params === 'string') {
      postBody = params;
    } else {
      postBody = JSON.stringify(params);
    }
    const headers = new Headers();
    headers.set('content-type', 'application/json');
    // if (options && options.token) {
      // headers.set('Authorization', 'Bearer ' + options.token);
    // }
    /* const requestOptions = new RequestOptions({
      headers: headers
    }); */
    return this.http.post(this.apiUrlPrefix + url, postBody, {headers: headers}).map(
      res => {
        return this.getBodyObject(res);
      },
      err => {
        return err;
      }
    );

  }

  get(url) {
    return this.http.get(this.apiUrlPrefix + url).map(
      res => {
        return this.getBodyObject(res);
      },
      err => {
        return err;
      }
    );
  }
}
