import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // <-- Importamos ReactiveFormsModule
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  mensajeEnviado = false;

  // Inyectamos FormBuilder y nuestro Servicio
  constructor(private fb: FormBuilder, private productosService: ProductosService) {
    // Definimos los campos y sus validaciones obligatorias
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]], // <-- Valida que sea un @correo válido
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  // Método que se ejecuta al darle click al botón Enviar
  enviarDatos() {
    if (this.contactoForm.valid) {
      // Usamos el método POST que agregamos a nuestro servicio
      this.productosService.enviarMensaje(this.contactoForm.value).subscribe({
        next: (respuesta: any) => {
          console.log('El backend responde:', respuesta);
          this.mensajeEnviado = true;
          this.contactoForm.reset(); // Limpiamos el formulario
        },
        error: (err) => console.error('Error al enviar mensaje:', err)
      });
    } else {
      // Si el usuario intentó enviar datos vacíos, marcamos todo como tocado para que salgan las letras rojas
      this.contactoForm.markAllAsTouched();
    }
  }
}
