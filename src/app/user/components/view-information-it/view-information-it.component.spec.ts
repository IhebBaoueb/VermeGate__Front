import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInformationITComponent } from './view-information-it.component';

describe('ViewInformationITComponent', () => {
  let component: ViewInformationITComponent;
  let fixture: ComponentFixture<ViewInformationITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInformationITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInformationITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
