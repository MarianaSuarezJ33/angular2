import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { PagoComponent } from './pages/pago/pago.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'carrito', component: CarritoComponent }, // Ruta para el componente Carrito
  { path: 'login', component: LoginComponent }, // Ruta para el componente Login
  { path: 'producto-detalle', component: ProductoDetalleComponent }, // Ruta para el componente ProductoDetalle
  { path: 'productos', component: ProductosComponent }, // Ruta para el componente Productos
  { path: 'registro', component: RegistroComponent }, // Ruta para el componente Registro
  { path: 'pago', component: PagoComponent }, // Ruta para el componente Pago
  { path: '**', component: HomeComponent } // Ruta por defecto (cualquier otra ruta no especificada)
];
