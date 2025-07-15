import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationWindow } from './reservation-window';

describe('ReservationWindow', () => {
  let component: ReservationWindow;
  let fixture: ComponentFixture<ReservationWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
