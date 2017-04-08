import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BroadcastService {
  private  events: any = {};
  constructor() { }

  private addEvent(event: string): void {
    this.events[event] = new Subject();
  }

  emit(event: string, data: any): void {
    if (!this.events[event]) {
      this.addEvent(event);
    }
    this.events[event].next(data);
  }

  on(event: string): Observable<any> {
    if (!this.events[event]) {
      this.addEvent(event);
    }
    return this.events[event].asObservable();
  }
}

