import { TestBed, inject } from '@angular/core/testing';

import { ItemsDetailsResolverService } from './items-details-resolver.service';

describe('ItemsDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsDetailsResolverService]
    });
  });

  it('should ...', inject([ItemsDetailsResolverService], (service: ItemsDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
