import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  mensajeEnviado = false;

  private Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    private ngZone: NgZone
  ) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  enviarDatos() {
    console.log('--- INICIO DE ENVÍO DE FORMULARIO ---');
    console.log('¿El formulario es válido?:', this.contactoForm.valid);

    if (this.contactoForm.valid) {
      console.log('Formulario correcto. Intentando conectar con el backend...');
      
      this.productosService.enviarMensaje(this.contactoForm.value).subscribe({
        next: (respuesta: any) => {
          this.ngZone.run(() => {
            console.log('ÉXITO: El backend respondió:', respuesta);
            this.Toast.fire({ icon: 'success', title: '¡Mensaje enviado correctamente!' });
            this.mensajeEnviado = true;
            this.contactoForm.reset();
          });
        },
        error: (err: any) => {
          this.ngZone.run(() => {
            console.error('ERROR: Falló la conexión con el backend:', err);
            this.Toast.fire({ icon: 'error', title: 'Error de conexión. Intentalo de nuevo.' });
          });
        }
      });
    } else {
      console.warn('ADVERTENCIA: El usuario intentó enviar datos incompletos.');
      this.Toast.fire({ icon: 'warning', title: 'Revisa los campos incorrectos' });
      this.contactoForm.markAllAsTouched(); 
    }
  }
}