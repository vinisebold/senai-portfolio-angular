import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat3 } from './tri-3';

describe('Mat3', () => {
  let component: Mat3;
  let fixture: ComponentFixture<Mat3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
