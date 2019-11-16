import { TestBed } from '@angular/core/testing';

import { CommentsServicesService } from './comments-services.service';

describe('CommentsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentsServicesService = TestBed.get(CommentsServicesService);
    expect(service).toBeTruthy();
  });
});
