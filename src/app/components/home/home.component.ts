import { Component, OnInit } from '@angular/core';
import { participanteInterface } from 'src/app/models/participante.interface';
import { ApiService } from 'src/app/services/api.service';
import {Chart} from 'chart.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  participantes: participanteInterface[] = []
  labelsArray:any = []
  dataArray:any = []
  backgroundColorArray:any=[]
  
  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getParticipantes().subscribe(
      (res:any)=>{
        this.participantes = res['participantes'];
    
        for (const participante of this.participantes) {
          this.labelsArray.push((participante.nombres)?.split(' ')[0] + ' ' + (participante.apellidos)?.split(' ')[0]);
          this.dataArray.push(participante.puntaje)
          this.backgroundColorArray.push(participante.sexo === 'm' ? '#2b5c72cf' : '#7c4c7ed4')
        }

        console.log(this.backgroundColorArray);
        
        
        var myChart = new Chart('myChart', {
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
    )

    



  }


}
