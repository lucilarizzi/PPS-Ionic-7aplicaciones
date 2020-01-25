import { TestBed } from '@angular/core/testing';

import { MetegolService } from './metegol.service';

describe('MetegolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetegolService = TestBed.get(MetegolService);
    expect(service).toBeTruthy();
  });
});
