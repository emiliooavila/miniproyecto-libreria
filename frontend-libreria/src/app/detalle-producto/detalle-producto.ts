import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../services/productos';


@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProductoComponent implements OnInit {
  libro: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Paso 1 - ID detectado en la URL:', id); 

    console.log('Paso 2 - Pidiendo datos al backend...');
    this.productosService.getProductoById(id).subscribe({
      next: (data: any) => {
        console.log('Paso 3 - ¡Datos recibidos del backend!:', data); 
        this.ngZone .run(() => {
          this.libro = data;
          this.cdr.detectChanges();
        });
      },
      error: (err: any) => {
        console.error('Error catastrófico al buscar el libro:', err);
      }
    });
  }
}