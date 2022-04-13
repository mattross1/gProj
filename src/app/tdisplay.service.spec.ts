import { TestBed } from '@angular/core/testing';

import { TdisplayService } from './tdisplay.service';

describe('TdisplayService', () => {
  let service: TdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
