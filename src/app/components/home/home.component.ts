import { CompetidorInterface } from './../../models/competidor.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {Chart} from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  competidores: CompetidorInterface[] = [];
  labelsArray: any = [];
  dataArray: any = [];
  backgroundColorArray: any = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getParticipantes().subscribe(
      (res: any) => {
        this.competidores = res.competidores;
        console.log(this.competidores);

        for (const competidor of this.competidores) {
          this.labelsArray.push((competidor.nombres)?.split(' ')[0] + ' ' + (competidor.apellidos)?.split(' ')[0]);
          this.dataArray.push(competidor.puntaje);
          this.backgroundColorArray.push(competidor.sexo === 'm' ? '#2b5c72cf' : '#7c4c7ed4');
        }

        console.log(this.backgroundColorArray);


        const myChart = new Chart('myChart', {
          type: 'horizontalBar',
          data: {
            labels: this.labelsArray,
            datasets: [{
              label: 'Puntos',
              data: this.dataArray,
              backgroundColor: this.backgroundColorArray,
              borderColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ],
              borderWidth: 1
            }]
          },

          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });


      }
    );





  }


}
