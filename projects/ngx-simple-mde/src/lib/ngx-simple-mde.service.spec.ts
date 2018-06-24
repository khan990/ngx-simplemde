import { TestBed, inject } from '@angular/core/testing';

import { NgxSimpleMdeService } from './ngx-simple-mde.service';

describe('NgxSimpleMdeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxSimpleMdeService]
    });
  });

  it('should be created', inject([NgxSimpleMdeService], (service: NgxSimpleMdeService) => {
    expect(service).toBeTruthy();
  }));
});
