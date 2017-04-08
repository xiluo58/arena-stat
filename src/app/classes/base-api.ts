import { ConfigService } from '@nglibs/config';
import { Http } from '@angular/http';
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

  post(url, params) {
    let postBody: string;
    if (typeof params !== 'string') {
      postBody = params;
    } else {
      postBody = JSON.stringify(params);
    }
    return this.http.post(this.apiUrlPrefix + url, postBody).map(
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
