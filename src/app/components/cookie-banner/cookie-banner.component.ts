import { Component, Input, OnInit } from '@angular/core';
import { IBannerResponse } from 'src/app/models/banner-response.interface';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  public isBannerExpanded: boolean = false;

  @Input()
  public bannerInformation: IBannerResponse;

  public toggleExpansion($event: MouseEvent) {
    this.isBannerExpanded = !this.isBannerExpanded;
  }
}
