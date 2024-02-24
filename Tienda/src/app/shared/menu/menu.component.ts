// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

// Definición del componente de menú
@Component({
  selector: 'app-menu', // Selector que identifica el componente en el HTML
  standalone: true, // Indica que este componente no depende de otro componente
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink], // Importación de módulos necesarios para el componente
  templateUrl: './menu.component.html', // Ruta del archivo HTML que contiene la plantilla del componente
  styleUrl: './menu.component.css' // Ruta del archivo CSS que contiene los estilos del componente
})
export class MenuComponent {

}
