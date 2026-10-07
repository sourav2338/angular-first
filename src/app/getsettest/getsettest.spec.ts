import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Getsettest } from './getsettest';

describe('Getsettest', () => {
  let component: Getsettest;
  let fixture: ComponentFixture<Getsettest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getsettest],
    }).compileComponents();

    fixture = TestBed.createComponent(Getsettest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
