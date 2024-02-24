// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServices } from '../../api/ProductoServices.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

// Definición del componente ProductosComponent
@Component({
  selector: 'app-productos', // Selector CSS que identifica el componente en el HTML
  standalone: true, // Propiedad que indica que este componente no depende de otro componente
  imports: [CommonModule, MatCardModule, MatPaginatorModule], // Importaciones de otros módulos necesarios para el componente
  templateUrl: './productos.component.html', // Ruta del archivo HTML que contiene la plantilla del componente
  styleUrls: ['./productos.component.css'], // Ruta del archivo CSS que contiene los estilos del componente
})
export class ProductosComponent implements OnInit {
  // Variables miembro del componente
  productos$: Observable<any>; // Observable que contiene la lista de productos
  productosPaginados: any[] = []; // Lista de productos paginados
  totalProductos: number = 0; // Total de productos
  productosPorPagina: number = 10; // Número de productos por página
  paginaActual: number = 1; // Página actual

  // Constructor del componente, inyecta el servicio ProductServices
  constructor(private productsSvs: ProductServices) {
    this.productos$ = this.productsSvs.getAllProductos(); // Obtiene todos los productos al inicializar el componente
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.cargarProductos(); // Carga los productos al inicializar el componente
  }

  // Método para cargar los productos y paginarlos
  cargarProductos() {
    this.productos$.subscribe((productos) => {
      this.totalProductos = productos.length; // Obtiene el total de productos
      const startIndex = (this.paginaActual - 1) * this.productosPorPagina; // Índice inicial de los productos en la página actual
      const endIndex = startIndex + this.productosPorPagina; // Índice final de los productos en la página actual
      this.productosPaginados = productos.slice(startIndex, endIndex); // Obtiene los productos de la página actual
    });
  }

  // Método para cambiar la página de productos
  cambiarPagina(event: any) {
    this.paginaActual = event.pageIndex + 1; // Actualiza el número de página actual
    this.cargarProductos(); // Vuelve a cargar los productos con la página actualizada
  }
}
