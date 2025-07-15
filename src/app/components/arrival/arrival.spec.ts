import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrival } from './arrival';

describe('Arrival', () => {
  let component: Arrival;
  let fixture: ComponentFixture<Arrival>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arrival]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arrival);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
