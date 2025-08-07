import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch1 } from './tri-1';

describe('Ch1', () => {
  let component: Ch1;
  let fixture: ComponentFixture<Ch1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
