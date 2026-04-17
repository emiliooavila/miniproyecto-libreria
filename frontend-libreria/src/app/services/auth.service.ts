import { Injectable, signal, inject } from '@angular/core';
import { CarritoService } from './carrito.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioActual = signal<string | null>(null);

  private carritoService = inject(CarritoService);

  login(nombre: string) {
    this.usuarioActual.set(nombre);
  }

  logout() {
    this.usuarioActual.set(null);
    this.carritoService.vaciarCarrito();
  }
}
