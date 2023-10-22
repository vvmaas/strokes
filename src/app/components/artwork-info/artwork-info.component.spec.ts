import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkInfoComponent } from './artwork-info.component';

describe('ArtworkInfoComponent', () => {
  let component: ArtworkInfoComponent;
  let fixture: ComponentFixture<ArtworkInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkInfoComponent]
    });
    fixture = TestBed.createComponent(ArtworkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
