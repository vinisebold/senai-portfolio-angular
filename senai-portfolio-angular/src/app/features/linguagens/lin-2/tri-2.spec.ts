import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lin2 } from './tri-2';

describe('Lin2', () => {
  let component: Lin2;
  let fixture: ComponentFixture<Lin2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lin2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lin2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
