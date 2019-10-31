import { TestBed } from '@angular/core/testing';

import { ApiInstanceService } from './api-instance.service';

describe('ApiInstanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInstanceService = TestBed.get(ApiInstanceService);
    expect(service).toBeTruthy();
  });
});
