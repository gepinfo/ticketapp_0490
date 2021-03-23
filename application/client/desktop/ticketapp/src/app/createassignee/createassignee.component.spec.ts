import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateassigneeComponent } from './createassignee.component';

describe('CreateassigneeComponent', () => {
  let component: CreateassigneeComponent;
  let fixture: ComponentFixture<CreateassigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateassigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateassigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});