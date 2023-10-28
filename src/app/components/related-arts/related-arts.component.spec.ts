import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedArtsComponent } from './related-arts.component';

describe('RelatedArtsComponent', () => {
  let component: RelatedArtsComponent;
  let fixture: ComponentFixture<RelatedArtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedArtsComponent]
    });
    fixture = TestBed.createComponent(RelatedArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
