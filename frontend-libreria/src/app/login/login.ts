import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  nombre: string = '';
  contrasena: string = '';
  toastMensaje: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    if (this.nombre && this.contrasena) {
      this.authService.login(this.nombre);
      this.toastMensaje = `Bienvenido a la libreria Alpha Proxima, ${this.nombre}`;
      
      setTimeout(() => {
        this.toastMensaje = '';
        this.router.navigate(['/catalogo']);
      }, 2500);
    } else {
      this.toastMensaje = 'Por favor, ingresa tu nombre y contrasena.';
      setTimeout(() => this.toastMensaje = '', 2500);
    }
  }
}
