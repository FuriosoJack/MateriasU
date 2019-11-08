import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktrakingComponent } from './backtraking.component';

describe('BacktrakingComponent', () => {
  let component: BacktrakingComponent;
  let fixture: ComponentFixture<BacktrakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktrakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktrakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
