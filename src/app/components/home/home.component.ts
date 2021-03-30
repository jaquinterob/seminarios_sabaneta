import { Component, OnInit } from '@angular/core';
import { participanteInterface } from 'src/app/models/participante.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  participantes: participanteInterface[] = []
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getParticipantes().subscribe(
      (res:any)=>{
        this.participantes = res['participantes'];
      }
    )
  }

}
