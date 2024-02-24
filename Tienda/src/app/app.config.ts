import { ApplicationConfig } from '@angular/core'; // Importa la interfaz ApplicationConfig desde '@angular/core'
import { provideRouter } from '@angular/router'; // Importa la función provideRouter desde '@angular/router'
import { routes } from './app.routes'; // Importa las rutas definidas en './app.routes'
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importa funciones relacionadas con HTTP desde '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importa funciones relacionadas con animaciones desde '@angular/platform-browser/animations/async'

// Configuración de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [ // Proveedores de servicios y funcionalidades de la aplicación
    provideRouter(routes), // Proveedor para las rutas de la aplicación utilizando las rutas definidas en './app.routes'
    provideHttpClient(withFetch()), // Proveedor para el cliente HTTP con la configuración proporcionada por withFetch()
    provideAnimationsAsync(), // Proveedor para las animaciones asincrónicas de la plataforma
    provideAnimationsAsync(), // (Duplicado) Proveedor para las animaciones asincrónicas de la plataforma
  ],
};
