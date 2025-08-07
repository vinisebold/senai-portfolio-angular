import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat1 } from './tri-1';

describe('Mat1', () => {
  let component: Mat1;
  let fixture: ComponentFixture<Mat1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
