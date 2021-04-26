import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieBannerItemComponent } from './components/cookie-banner-item/cookie-banner-item.component';
import { SwitchComponent } from './shared/switch/switch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerComponent,
    CookieBannerItemComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
