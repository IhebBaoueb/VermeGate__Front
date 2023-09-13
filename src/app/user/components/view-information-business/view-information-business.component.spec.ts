import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInformationBusinessComponent } from './view-information-business.component';

describe('ViewInformationBusinessComponent', () => {
  let component: ViewInformationBusinessComponent;
  let fixture: ComponentFixture<ViewInformationBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInformationBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInformationBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
