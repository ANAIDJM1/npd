import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaboradores } from '../models/colaboradores.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {


  constructor(private http:HttpClient){}
  
  createColaboradores (colaboradores:Colaboradores){
    return this.http.post(`http://timetables-app.herokuapp.com/back/api/employee?action=create`,colaboradores)
  }

  getColaboradores (){
    return this.http.get(`http://timetables-app.herokuapp.com/back/api/employee?action=read&size=10&page=1&gender=-1`)
  }
  getColaborador (dni:string){
    console.log(dni);
    return this.http.get(`https://timetables-app.herokuapp.com/back/api/employee?action=read&size=10&page=1&gender=-1&filter=`+dni)
  }

  updateColaboradores (colaboradores:Colaboradores){
    return this.http.post(`http://timetables-app.herokuapp.com/back/api/employee?action=update`,colaboradores);
  }
  deleteColaboradores (colaboradores:any){
    console.log(colaboradores)
    return this.http.post(`http://timetables-app.herokuapp.com/back/api/employee?action=delete`,colaboradores);
  }

  buscar(texto: string){
    return this.http.get(`https://timetables-app.herokuapp.com/back/api/employee?action=read&size=10&page=1&gender=-1&filter=`+texto)
  }

}
