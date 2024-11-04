import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSalaComponent } from './mostrar-sala.component';

describe('MostrarSalaComponent', () => {
  let component: MostrarSalaComponent;
  let fixture: ComponentFixture<MostrarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarSalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
