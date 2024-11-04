import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalaService } from '../sala.service';
import { Sala } from '../sala';

@Component({
  selector: 'app-mostrar-sala',
  templateUrl: './mostrar-sala.component.html',
  styleUrls: ['./mostrar-sala.component.css']
})
export class MostrarSalaComponent {
  @Input() id: number | null = null; // ID de la sala que se va a buscar
  @Output() salaEncontrada = new EventEmitter<Sala | null>(); // Evento que se emite cuando se encuentra la sala
  @Output() error = new EventEmitter<string>(); // Evento que se emite en caso de error

  sala: Sala | null = null;

  constructor(private salaService: SalaService) {}

  buscarSala(): void {
    if (this.id) {
      this.salaService.obtenerSalaPorId(this.id).subscribe({
        next: (sala) => {
          this.sala = sala;
          this.salaEncontrada.emit(this.sala); // Emitir la sala encontrada
          this.error.emit(''); // Limpiar el mensaje de error
        },
        error: (err) => {
          console.error('Error al obtener la sala:', err);
          this.error.emit('Sala no encontrada'); // Emitir el mensaje de error
          this.sala = null; // Limpiar la sala si hay error
        }
      });
    }
  }
}
