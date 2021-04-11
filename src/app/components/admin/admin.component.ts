import { CompetidorInterface } from 'src/app/models/competidor.interface';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  competidores: CompetidorInterface[] = [];
  valorSelect = 0;
  select = [
    { clave: '5', valor: 5 },
    { clave: '10', valor: 10 },
    { clave: '15', valor: 15 },
    { clave: '20', valor: 20 },
    { clave: '25', valor: 25 },
    { clave: '30', valor: 30 },
    { clave: '35', valor: 35 },
    { clave: '40', valor: 40 },
  ];


  sexo = '';
  nombres = '';
  apellidos = '';
  selectSexo = [
    { clave: 'Masculino', valor: 'm' },
    { clave: 'Femenino', valor: 'f' }
  ];

  constructor(private api: ApiService, private toast: MatSnackBar) { }

  ngOnInit(): void {
    this.api.getParticipantes().subscribe(
      (res: any) => {
        if (res.ok) {
          this.competidores = res.competidores;

        }
      }
    );
  }

  sumar(indice: number): any {
    if (this.competidores[indice].select !== 0) {
      this.competidores[indice].puntaje = this.competidores[indice].puntaje + this.competidores[indice].select
      this.competidores[indice].lastUpdate = new Date().toLocaleDateString() + ' ' + (new Date().toTimeString()).split(' ')[0];
      console.log(this.competidores[indice].lastUpdate);

      this.competidores[indice].select = 0;
      this.api.updateParticipante(this.competidores[indice]).subscribe(
        (res: any) => {
          console.log(res.message);
          this.toast.open(res.message, '', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],

          });

        },
        (error: ErrorHandler) => {
          console.log(error);

        }
      );
    }
  }

  crearParticipante(): void {
    const nuevoParticipante = {
      nombres: this.nombres,
      apellidos: this.apellidos,
      sexo: this.sexo,
      foto: this.convertirNombresAFoto((this.nombres).trim() + ' ' + (this.apellidos).trim()),
      puntaje: 0,
      select: 0
    };
    this.api.addParticipante(nuevoParticipante).subscribe(
      (res: any) => {
        if (res.ok) {
          this.toast.open(res.message, '', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          this.ngOnInit();
          this.nombres = '';
          this.apellidos = '';
          this.sexo = '';
        }
      }
    );
  }

  convertirNombresAFoto(nombreCompleto: string): string {
    const arrayNombre = nombreCompleto.split(' ');
    const respuesta = arrayNombre.join('_');
    return respuesta.toLowerCase();
  }

  deleteParticipante(competidor: CompetidorInterface): void {
    this.api.deleteParticipante(competidor).subscribe(
      (res: any) => {
        if (res.ok) {
          this.ngOnInit();
        }
      }
    );
  }

}
