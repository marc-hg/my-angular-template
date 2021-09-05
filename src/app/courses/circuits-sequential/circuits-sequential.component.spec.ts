import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsSequentialComponent } from './circuits-sequential.component';

describe('CircuitsSequentialComponent', () => {
  let component: CircuitsSequentialComponent;
  let fixture: ComponentFixture<CircuitsSequentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsSequentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsSequentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
