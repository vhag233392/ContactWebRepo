import { Component, OnInit, OnDestroy } from '@angular/core';
import {SalaService} from '../sala.service';
import {Sala} from '../sala';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
export class ListarSalasComponent implements OnInit, OnDestroy {
  salas: Sala[] = [];
  isLoading = false;
  error: string | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private salaService: SalaService) {
  }

  ngOnInit(): void {
    this.loadSalas();
  }

  loadSalas(): void {
    this.isLoading = true;
    this.error = null;

    this.subscription.add(
      this.salaService.getSalas().subscribe({
        next: (response) => {
          this.salas = response;
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'Error loading salas: ' + error.message;
          this.isLoading = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
