import { TestBed } from '@angular/core/testing';

import { ArchivosFirebaseService } from './archivos-firebase.service';

describe('ArchivosFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosFirebaseService = TestBed.get(ArchivosFirebaseService);
    expect(service).toBeTruthy();
  });
});
