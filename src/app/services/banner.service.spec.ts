import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BannerService } from './banner.service';

describe('BannerService', () => {
  let service: BannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BannerService,
        // {
        //   provide: HttpClient, useValue: {
        //     get: () => { }
        //   }
        // }
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
