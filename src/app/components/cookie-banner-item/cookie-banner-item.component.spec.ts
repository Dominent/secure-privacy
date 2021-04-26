import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBannerItemComponent } from './cookie-banner-item.component';

describe('CookieBannerItemComponent', () => {
  let component: CookieBannerItemComponent;
  let fixture: ComponentFixture<CookieBannerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieBannerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieBannerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
