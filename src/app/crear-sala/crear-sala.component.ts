// crear-sala.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent {
  salaForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.salaForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: [''],
      capacidad: ['', [Validators.required, Validators.min(1)]],
      lider_proyecto: ['']
    });
  }

  onSubmit() {
    if (this.salaForm.valid) {
      const datosSala = this.salaForm.value; // Asegúrate de que aquí estás obteniendo los valores correctos
      console.log('Datos a enviar:', datosSala); // Imprimir los datos antes de enviar
      this.http.post('http://127.0.0.1:8000/salas/', datosSala)
        .subscribe({
          next: response => {
            console.log('Sala creada:', response);
          },
          error: error => {
            console.error('Error al crear la sala:', error);
            console.error('Detalles del error:', error.error.detail);
          }
        });
    } else {
      console.error('Formulario no válido:', this.salaForm.errors);
    }
  }


}
