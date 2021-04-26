import { Component, Input, OnInit } from '@angular/core';
import { IAccordian } from 'src/app/models/accordian.interface';

@Component({
  selector: 'app-cookie-banner-item',
  templateUrl: './cookie-banner-item.component.html',
  styleUrls: ['./cookie-banner-item.component.css']
})
export class CookieBannerItemComponent {
  public isPluginExpanded: boolean = false;

  @Input()
  public accordion: IAccordian;

  public toggleExpansion($event: MouseEvent) {
    this.isPluginExpanded = !this.isPluginExpanded;
  }
}
