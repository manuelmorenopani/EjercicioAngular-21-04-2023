import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente31Articulo1Component } from './componente3.1-articulo1.component';

describe('Componente31Articulo1Component', () => {
  let component: Componente31Articulo1Component;
  let fixture: ComponentFixture<Componente31Articulo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente31Articulo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente31Articulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
