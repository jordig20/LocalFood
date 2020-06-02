import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinerosViewComponent } from './cocineros-view.component';

describe('CocinerosViewComponent', () => {
  let component: CocinerosViewComponent;
  let fixture: ComponentFixture<CocinerosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocinerosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinerosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
