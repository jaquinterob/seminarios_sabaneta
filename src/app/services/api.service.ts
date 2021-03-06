import { ParticipanteInterface } from 'src/app/models/participante.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getParticipantes(): any {
    return this.http.get('http://aplicaciones.coopsana.com.co:5000/api/seminarios/participantes/all');
  }

  updateParticipante(participante: ParticipanteInterface): any{
    return this.http.put('http://aplicaciones.coopsana.com.co:5000/api/seminarios/participantes/', participante);
  }

  addParticipante(participante: ParticipanteInterface): any{
    return this.http.post('http://aplicaciones.coopsana.com.co:5000/api/seminarios/participantes/add', participante);
  }

  deleteParticipante(participante: ParticipanteInterface): any{
    return this.http.delete(`http://aplicaciones.coopsana.com.co:5000/api/seminarios/participantes/${participante._id}`);
  }

}
