import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinerosComponent } from './cocineros.component';

describe('CocinerosComponent', () => {
  let component: CocinerosComponent;
  let fixture: ComponentFixture<CocinerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocinerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
