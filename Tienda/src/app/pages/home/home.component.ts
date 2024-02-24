import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  principalesProductos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llamar al API para obtener los productos
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(products => {
      // Filtrar los productos por la valoración
      this.principalesProductos = products.filter(producto => parseFloat(producto.rating.rate) >= 3.9);
    });
  }
}
