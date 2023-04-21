import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2HabilidadesComponent } from './componente2-habilidades.component';

describe('Componente2HabilidadesComponent', () => {
  let component: Componente2HabilidadesComponent;
  let fixture: ComponentFixture<Componente2HabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2HabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2HabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
