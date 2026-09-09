import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportDetails } from './support-details';

describe('SupportDetails', () => {
  let component: SupportDetails;
  let fixture: ComponentFixture<SupportDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
