import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { CatalogoComponent } from './catalogo/catalogo';
import { ContactoComponent } from './contacto/contacto';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' }, //catálogo es la página principal por ahora
  { path: '**', redirectTo: '/catalogo' }
];