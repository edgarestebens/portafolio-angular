import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Equipo, Infopagina } from '../interfaces/info-pagina.intreface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:Infopagina = {};
  equipo: Equipo[] = [];
  cargada = false;

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: Infopagina) => {
    this.cargada = true;
    this.info = resp;
    // console.log(this.info);
    });
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-6f2de-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: Equipo[]) => {    
    this.equipo = resp;
    // console.log(this.equipo);
    });
   }

  

}
