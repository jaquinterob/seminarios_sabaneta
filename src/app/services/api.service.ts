import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { participanteInterface } from '../models/participante.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getParticipantes(): any{
    return this.http.get('http://localhost:5000/api/seminarios/participantes/all')
  }




}
