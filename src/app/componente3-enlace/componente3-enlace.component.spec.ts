import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3EnlaceComponent } from './componente3-enlace.component';

describe('Componente3EnlaceComponent', () => {
  let component: Componente3EnlaceComponent;
  let fixture: ComponentFixture<Componente3EnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente3EnlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente3EnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
