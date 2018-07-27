import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishComponent } from './unfinish.component';

describe('UnfinishComponent', () => {
  let component: UnfinishComponent;
  let fixture: ComponentFixture<UnfinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
