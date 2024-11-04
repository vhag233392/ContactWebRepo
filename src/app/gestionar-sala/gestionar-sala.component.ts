import { Component } from '@angular/core';
import { SalaService } from '../sala.service';
import {Sala} from '../sala';

@Component({
  selector: 'app-gestionar-sala',
  templateUrl: './gestionar-sala.component.html'
})
export class GestionarSalaComponent {
  idSala: number | null = null; // Almacena el ID de la sala a buscar/eliminar
  sala: Sala | null = null; // Almacena la sala encontrada
  mensaje: string = ''; // Mensaje para mostrar al usuario

  constructor(private salaService: SalaService) { }

  buscarSala() {
    if (this.idSala !== null) {
      this.salaService.obtenerSalaPorId(this.idSala).subscribe({
        next: (sala) => {
          this.sala = sala;
          this.mensaje = ''; // Limpiar mensajes
        },
        error: (err) => {
          this.mensaje = `Error al buscar la sala: ${err.message}`;
          this.sala = null; // Reiniciar la sala si hay error
        }
      });
    } else {
      this.mensaje = 'Por favor, ingresa un ID válido.';
    }
  }

  eliminarSala() {
    if (this.idSala !== null && this.sala) {
      this.salaService.eliminarSala(this.idSala).subscribe({
        next: () => {
          this.mensaje = `Sala con ID ${this.idSala} eliminada exitosamente.`;
          this.sala = null; // Reiniciar la sala
          this.idSala = null; // Reiniciar el campo
        },
        error: (err) => {
          this.mensaje = `Error al eliminar la sala: ${err.message}`;
        }
      });
    } else {
      this.mensaje = 'Por favor, busca una sala antes de eliminar.';
    }
  }
}
