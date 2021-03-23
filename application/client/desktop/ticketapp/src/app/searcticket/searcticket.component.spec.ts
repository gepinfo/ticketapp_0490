import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcticketComponent } from './searcticket.component';

describe('SearcticketComponent', () => {
  let component: SearcticketComponent;
  let fixture: ComponentFixture<SearcticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});