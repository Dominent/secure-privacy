import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBannerResponse } from './models/banner-response.interface';

import { BannerService } from './services/banner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public bannerResponse$: Observable<IBannerResponse>;

  constructor(private _bannerService: BannerService) {}

  public ngOnInit(): void {
    this.bannerResponse$ = this._bannerService.getBanner();
  }
}
