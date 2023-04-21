import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente32Articulo2Component } from './componente3.2-articulo2.component';

describe('Componente32Articulo2Component', () => {
  let component: Componente32Articulo2Component;
  let fixture: ComponentFixture<Componente32Articulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente32Articulo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente32Articulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
