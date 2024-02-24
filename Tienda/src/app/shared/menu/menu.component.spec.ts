// Importaciones necesarias para las pruebas del componente
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component'; // Importa el componente a ser probado

describe('MenuComponent', () => {
  let component: MenuComponent; // Variable para almacenar una instancia del componente
  let fixture: ComponentFixture<MenuComponent>; // Variable para almacenar el fixture del componente (un wrapper alrededor del componente para facilitar las pruebas)

  beforeEach(async () => {
    // Configuración de TestBed para configurar el entorno de pruebas
    await TestBed.configureTestingModule({
      declarations: [MenuComponent] // Declara el componente que se está probando
    }).compileComponents(); // Compila los componentes de la configuración

    fixture = TestBed.createComponent(MenuComponent); // Crea una instancia del componente dentro del fixture
    component = fixture.componentInstance; // Asigna la instancia del componente a la variable 'component'
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  // Prueba para comprobar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la variable 'component' sea verdadera (es decir, que el componente se haya creado correctamente)
  });
});
