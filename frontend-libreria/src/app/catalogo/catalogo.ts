import { Component, OnInit, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'] 
})
export class CatalogoComponent implements OnInit {
  libros: any[] = [];

  constructor(
    private productosService: ProductosService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('Cargando catálogo de libros...');
    this.productosService.getProductos().subscribe({
      next: (datos) => {
        this.ngZone.run(() => {
          this.libros = datos;
          this.cdr.detectChanges(); 
          console.log('Libros cargados:', this.libros);
        });
      },
      error: (error) => {
        console.error('Error al cargar la API:', error);
      }
    });
  }
}