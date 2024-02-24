// Importaciones necesarias para las pruebas del componente
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComponent } from './productos.component'; // Importa el componente a ser probado

// Suite de pruebas para el componente ProductosComponent
describe('ProductosComponent', () => {
  let component: ProductosComponent; // Variable para almacenar una instancia del componente
  let fixture: ComponentFixture<ProductosComponent>; // Variable para almacenar el fixture del componente (un wrapper alrededor del componente para facilitar las pruebas)

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración de TestBed para configurar el entorno de pruebas
    await TestBed.configureTestingModule({
      declarations: [ProductosComponent] // Declara el componente que se está probando
    }).compileComponents(); // Compila los componentes de la configuración

    // Crea una instancia del componente dentro del fixture
    fixture = TestBed.createComponent(ProductosComponent);
    // Asigna la instancia del componente a la variable 'component'
    component = fixture.componentInstance;
    // Detecta los cambios en el componente
    fixture.detectChanges();
  });

  // Prueba para comprobar si el componente se crea correctamente
  it('should create', () => {
    // Espera que la variable 'component' sea verdadera (es decir, que el componente se haya creado correctamente)
    expect(component).toBeTruthy();
  });
});
