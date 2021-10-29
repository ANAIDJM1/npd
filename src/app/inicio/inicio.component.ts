import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../service/colaborador.service';
import { Colaboradores } from '../models/colaboradores.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(private colaboradorService:ColaboradorService) { }
  Colaboradores:any;
  ngOnInit(): void {
        this.colaboradorService.getColaboradores()
        .subscribe(resp=>{
       
        
          this.Colaboradores=resp;
        })
  }
  borrar(dni:any){
    this.colaboradorService.deleteColaboradores(dni)
        .subscribe(resp=>{
          console.log(resp)
        })
  }

  buscar(texto: string){
    this.colaboradorService.buscar(texto).subscribe((data:any)=>{
      this.Colaboradores=data;
    })
  }
}
