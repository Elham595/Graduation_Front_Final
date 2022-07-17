import { TestBed } from '@angular/core/testing';

import { DesginersService } from './desginers.service';

describe('DesginersService', () => {
  let service: DesginersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesginersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
