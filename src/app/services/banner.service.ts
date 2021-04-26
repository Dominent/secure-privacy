import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IBannerResponse } from '../models/banner-response.interface';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  public getBanner(): Observable<IBannerResponse> {
    return this._httpClient.get<IBannerResponse>(`${environment.apiUrl}/common/getBanner`);
  }
}
