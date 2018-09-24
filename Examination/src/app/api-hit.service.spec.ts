import { TestBed } from '@angular/core/testing';

import { ApiHitService } from './api-hit.service';

describe('ApiHitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHitService = TestBed.get(ApiHitService);
    expect(service).toBeTruthy();
  });
});
