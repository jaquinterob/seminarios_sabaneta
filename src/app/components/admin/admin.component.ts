import { participanteInterface } from 'src/app/models/participante.interface';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  participantes: participanteInterface[] = []
  valorSelect = 0
  select = [
    { clave: "Asistencia - 2", valor: 2 },
    { clave: "Puntualidad - 1", valor: 1 },
    { clave: "Camara - 1", valor: 1 },
    { clave: "Participación por asignación  - 1", valor: 1 },
    { clave: "Participación por iniciativa - 1", valor: 1 },
    { clave: "Lectura mySeminary Diaria - 3", valor: 3 },
    { clave: "Reporte 100% Seminarios - 15", valor: 15 },
    { clave: "Dominio - 13", valor: 13 },
  ]

 
  sexo = ''
  nombres = ''
  apellidos = ''
  selectSexo = [
    { clave: "Masculino", valor: 'm' },
    { clave: "Femenino", valor: 'f' }
  ]

  constructor(private api: ApiService, private toast: MatSnackBar) { }

  ngOnInit(): void {
    this.api.getParticipantes().subscribe(
      (res: any) => {
        if (res.ok) {
          this.participantes = res.participantes;

        }
      }
    )
  }

  sumar(indice: number) {
    if (this.participantes[indice].select !== 0) {



      this.participantes[indice].puntaje = this.participantes[indice].puntaje + this.participantes[indice].select
      this.participantes[indice].select = 0
      this.api.updateParticipante(this.participantes[indice]).subscribe(
        (res: any) => {
          console.log(res.message);
          this.toast.open(res['message'], "", {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],

          });

        },
        (error: ErrorHandler) => {
          console.log(error);

        }
      )
    }
  }

  crearParticipante(){
    const nuevoParticipante={
      nombres:this.nombres,
      apellidos:this.apellidos,
      sexo:this.sexo,
      puntaje:0,
      select:0
    }
    this.api.addParticipante(nuevoParticipante).subscribe(
      (res:any)=>{
        if(res.ok){
          this.toast.open(res['message'], "", {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          this.ngOnInit()
          this.nombres =''
          this.apellidos=''
          this.sexo=''
        }
      }
    )
  }

}
