import { Component } from '@angular/core';
import { SalaService } from '../sala.service';
import { Sala } from '../sala';

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrls: ['./editar-sala.component.css']
})
export class EditarSalaComponent {
  salaEditando: Sala | null = null;
  id: number | null = null;
  errorMessage: string | null = null;

  constructor(private salaService: SalaService) {}

  buscarSala(): void {
    if (this.id) {
      this.salaService.obtenerSalaPorId(this.id).subscribe({
        next: (sala) => {
          this.salaEditando = sala;
          this.errorMessage = null; // Limpiar el mensaje de error
        },
        error: (err) => {
          console.error('Error al obtener la sala:', err);
          this.errorMessage = 'Sala no encontrada';
          this.salaEditando = null; // Limpiar la sala editando si hay error
        }
      });
    }
  }

  actualizarSala(): void {
    if (this.salaEditando) {
      this.salaService.editarSala(this.salaEditando.id, this.salaEditando).subscribe({
        next: () => {
          console.log('Sala actualizada');
          this.salaEditando = null; // Limpiar el formulario después de la actualización
          this.id = null; // Limpiar el ID
        },
        error: (err) => {
          console.error('Error al actualizar la sala:', err);
        }
      });
    }
  }
}
