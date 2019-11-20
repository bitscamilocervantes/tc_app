import { TestBed } from '@angular/core/testing';

import { EdicionesService } from './ediciones.service';

describe('EdicionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdicionesService = TestBed.get(EdicionesService);
    expect(service).toBeTruthy();
  });
});
