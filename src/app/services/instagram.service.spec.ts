/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstagramService } from './instagram.service';

describe('InstagramServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramService]
    });
  });

  it('should ...', inject([InstagramService], (service: InstagramService) => {
    expect(service).toBeTruthy();
  }));
});
