import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-producto.html',
  styleUrls: ['./formulario-producto.css']
})
export class FormularioProductoComponent {
  productoForm: FormGroup;
  toastMensaje: string = '';
  
  private fb = inject(FormBuilder);
  authService = inject(AuthService);
  private productosService = inject(ProductosService);

  constructor() {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      isbn: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      imagen: [''],
      descripcion: ['', Validators.required],
      disponible: [true] // Este valor lo mantendremos true en memoria por omision al crear uno nuevo
    });
  }

  guardar() {
    if (this.productoForm.valid) {
      this.productosService.agregarProducto(this.productoForm.value).subscribe({
        next: (respuesta) => {
          this.toastMensaje = `¡Éxito! ${respuesta.mensaje}`;
          this.productoForm.reset({ precio: 0, stock: 0, disponible: true, categoria: '' });
          setTimeout(() => this.toastMensaje = '', 4500);
        },
        error: (err) => {
          this.toastMensaje = `Error: ${err.error?.error || 'Falló la conexión con la BD'}`;
          setTimeout(() => this.toastMensaje = '', 4500);
        }
      });
    } else {
      // Marcar todo como tocado para que salgan borders rojos de alerta
      this.productoForm.markAllAsTouched();
    }
  }
}
