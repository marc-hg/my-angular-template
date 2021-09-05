import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToOopComponent } from './introduction-to-oop.component';

describe('IntroductionToOopComponent', () => {
  let component: IntroductionToOopComponent;
  let fixture: ComponentFixture<IntroductionToOopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionToOopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
