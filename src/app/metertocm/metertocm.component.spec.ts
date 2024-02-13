import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetertocmComponent } from './metertocm.component';

describe('MetertocmComponent', () => {
  let component: MetertocmComponent;
  let fixture: ComponentFixture<MetertocmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetertocmComponent]
    });
    fixture = TestBed.createComponent(MetertocmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
