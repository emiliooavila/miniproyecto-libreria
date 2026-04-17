import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { CatalogoComponent } from './catalogo/catalogo';
import { ContactoComponent } from './contacto/contacto';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto';
import { CarritoComponent } from './carrito/carrito';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalogo' }
];