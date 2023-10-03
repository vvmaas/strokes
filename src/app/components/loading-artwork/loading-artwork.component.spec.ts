import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingArtworkComponent } from './loading-artwork.component';

describe('LoadingArtworkComponent', () => {
  let component: LoadingArtworkComponent;
  let fixture: ComponentFixture<LoadingArtworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingArtworkComponent]
    });
    fixture = TestBed.createComponent(LoadingArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
