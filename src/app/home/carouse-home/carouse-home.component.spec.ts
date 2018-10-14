import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseHomeComponent } from './carouse-home.component';

describe('CarouseHomeComponent', () => {
  let component: CarouseHomeComponent;
  let fixture: ComponentFixture<CarouseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
