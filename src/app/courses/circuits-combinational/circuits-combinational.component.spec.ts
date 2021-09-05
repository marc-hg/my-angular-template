import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsCombinationalComponent } from './circuits-combinational.component';

describe('CircuitsCombinationalComponent', () => {
  let component: CircuitsCombinationalComponent;
  let fixture: ComponentFixture<CircuitsCombinationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsCombinationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsCombinationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
