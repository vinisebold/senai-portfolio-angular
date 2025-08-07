import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lin3 } from './tri-3';

describe('Lin3', () => {
  let component: Lin3;
  let fixture: ComponentFixture<Lin3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lin3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lin3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
