import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat2 } from './tri-2';

describe('Mat2', () => {
  let component: Mat2;
  let fixture: ComponentFixture<Mat2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
