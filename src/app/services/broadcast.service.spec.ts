/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BroadcastService } from './broadcast.service';

describe('BroadcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastService]
    });
  });

  it('should ...', inject([BroadcastService], (service: BroadcastService) => {
    expect(service).toBeTruthy();
  }));
});
