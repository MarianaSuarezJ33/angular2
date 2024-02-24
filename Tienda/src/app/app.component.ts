// Importaciones de módulos y componentes necesarios
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from './shared/menu/menu.component';

// Definición del componente raíz de la aplicación
@Component({
  selector: 'app-root', // Selector que identifica el componente en el HTML
  standalone: true, // Indica que este componente no depende de otro componente
  templateUrl: './app.component.html', // Ruta del archivo HTML que contiene la plantilla del componente
  styleUrl: './app.component.css', // Ruta del archivo CSS que contiene los estilos del componente
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, MenuComponent] // Importación de módulos necesarios para el componente
})
export class AppComponent {
  title = 'shop'; // Propiedad que define el título de la aplicación
}
