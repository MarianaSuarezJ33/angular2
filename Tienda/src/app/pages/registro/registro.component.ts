// Importación del decorador Component desde Angular core
import { Component } from '@angular/core';

// Decorador que define el componente RegistroComponent
@Component({
  selector: 'app-registro', // Selector CSS que identifica el componente en el HTML
  standalone: true, // Propiedad que indica que este componente no depende de otro componente
  imports: [], // Importaciones de otros módulos (en este caso, vacío)
  templateUrl: './registro.component.html', // Ruta del archivo HTML que contiene la plantilla del componente
  styleUrls: ['./registro.component.css'] // Ruta del archivo CSS que contiene los estilos del componente
})
export class RegistroComponent { // Clase del componente RegistroComponent

}
