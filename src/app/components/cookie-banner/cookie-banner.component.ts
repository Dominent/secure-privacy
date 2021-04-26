import { Component, Input, OnInit } from '@angular/core';
import { IBannerResponse } from 'src/app/models/banner-response.interface';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  public isBannerExpanded: boolean = true;

  @Input()
  public bannerInformation: IBannerResponse;

  public ngOnInit(): void {
  }

  public toggleExpansion($event: MouseEvent) {
    this.isBannerExpanded = !this.isBannerExpanded;
  }
}
