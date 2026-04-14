import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.html'
})
export class DetalleProductoComponent implements OnInit {
  libro: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    // 1. Extraemos el ID numérico de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // 2. Le pedimos al backend la información de ese ID
    this.productosService.getProductoById(id).subscribe({
      next: (data) => {
        this.libro = data;
      },
      error: (err) => console.error('Error al cargar detalle:', err)
    });
  }
}