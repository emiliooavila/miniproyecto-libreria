import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  carritoService = inject(CarritoService);
  authService = inject(AuthService);
  router = inject(Router);

  toastMensaje: string = '';

  actualizarCantidad(id: number, cantidadActual: number, cambio: number) {
    this.carritoService.actualizarCantidad(id, cantidadActual + cambio);
  }

  procederAlPago() {
    if (this.carritoService.items().length === 0) {
      this.mostrarToast("Tu carrito esta vacio.");
      return;
    }

    if (!this.authService.usuarioActual()) {
      this.mostrarToast("Por favor, inicia sesion para continuar con el pago.");
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2500);
      return;
    }

    this.carritoService.vaciarCarrito();
    this.mostrarToast("Pago realizado exitosamente en Alpha Proxima.");
  }

  mostrarToast(mensaje: string) {
    this.toastMensaje = mensaje;
    setTimeout(() => {
      this.toastMensaje = '';
    }, 3500);
  }
}
