import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventChecking } from './event-checking';

describe('EventChecking', () => {
  let component: EventChecking;
  let fixture: ComponentFixture<EventChecking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventChecking],
    }).compileComponents();

    fixture = TestBed.createComponent(EventChecking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
