import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4FormularioComponent } from './componente4-formulario.component';

describe('Componente4FormularioComponent', () => {
  let component: Componente4FormularioComponent;
  let fixture: ComponentFixture<Componente4FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente4FormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente4FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
