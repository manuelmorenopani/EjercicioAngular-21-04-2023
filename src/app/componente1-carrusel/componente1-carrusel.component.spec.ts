import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1CarruselComponent } from './componente1-carrusel.component';

describe('Componente1CarruselComponent', () => {
  let component: Componente1CarruselComponent;
  let fixture: ComponentFixture<Componente1CarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1CarruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1CarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
