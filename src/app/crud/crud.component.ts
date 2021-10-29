import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ColaboradorService } from '../service/colaborador.service';
import { Colaboradores } from '../models/colaboradores.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private route:ActivatedRoute,private colaboradorService:ColaboradorService) { }
  colaborador:any=[];
  colaborador2!:Colaboradores;
  numero:any =null;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log("Este es un id "+id);
    if ( id !== 'nuevo' && id!=null) {
      this.colaboradorService.getColaborador( id )
        .subscribe( (resp: any) => {
          this.colaborador = resp.content[0];
          // console.log(resp.content[0].mobile)
          this.numero= resp.content[0].dni;
        console.log("esto es un numero"  +  this.numero)
        });
    }
  }
  guardar(form:NgForm){
    if(form.invalid){
      console.log("formulario invalido")
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();
    let peticion: Observable<any>;
    if(this.numero=!null)
    {
      this.colaborador2 = form.value;
      peticion = this.colaboradorService.updateColaboradores( this.colaborador2 );
    }else{
      this.colaborador2 = form.value;
      peticion = this.colaboradorService.createColaboradores( this.colaborador2 );
    }
    peticion.subscribe( resp => {
      console.log(resp);
      Swal.fire({
        title: this.colaborador2.names,
        text: 'Se actualizó correctamente',
      });
    });
  }

}
