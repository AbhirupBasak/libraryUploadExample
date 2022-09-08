import { TestBed } from '@angular/core/testing';

import { LibraryExampleService } from './library-example.service';

describe('LibraryExampleService', () => {
  let service: LibraryExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
