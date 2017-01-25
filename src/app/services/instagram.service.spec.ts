/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstagramServiceService } from './instagram-service.service';

describe('InstagramServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramServiceService]
    });
  });

  it('should ...', inject([InstagramServiceService], (service: InstagramServiceService) => {
    expect(service).toBeTruthy();
  }));
});
