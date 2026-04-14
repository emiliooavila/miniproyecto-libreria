import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'] 
})
export class CatalogoComponent implements OnInit {
  libros: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    console.log('Cargando catálogo de libros...');
    this.productosService.getProductos().subscribe({
      next: (datos) => {
        this.libros = datos;
        console.log('Libros cargados:', this.libros);
      },
      error: (error) => {
        console.error('Error al cargar la API:', error);
      }
    });
  }
}