import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInformacionComponent } from './perfil-informacion.component';

describe('PerfilInformacionComponent', () => {
  let component: PerfilInformacionComponent;
  let fixture: ComponentFixture<PerfilInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
