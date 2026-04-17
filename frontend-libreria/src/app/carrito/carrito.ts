import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  carritoService = inject(CarritoService);

  actualizarCantidad(id: number, cantidadActual: number, cambio: number) {
    this.carritoService.actualizarCantidad(id, cantidadActual + cambio);
  }
}
