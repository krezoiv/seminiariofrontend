import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Integrantes_I } from 'src/app/interfaces';
import { Integrantes } from 'src/app/models';
import {IntegrantesAlumnos, ApiServicesService } from 'src/app/service/api-services.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id : string = ""
  listItegrantes!: any [];
  int : Integrantes ={ id:'', carnet:'', nombres:'', apellidos:'', telefono:'', email:''}
  newIntegranteForm : FormGroup = this.fb.group({

    carnet: [''],
    nombres: [''],
    apellidos: [''],
    telefono: [''],
    email: [''],
    id:['']
  
  })
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRouter : ActivatedRoute,
    private apiService: ApiServicesService,
  ) { }

  ngOnInit(): void {
    this.getIntegrantes();
    this.id = this.activateRouter.snapshot.params['id'];

    this.apiService.getOneIntegrantes(this.id).subscribe(rows=>{
     this.int = rows

       console.log(rows)
     this.newIntegranteForm.controls['id'].setValue(rows.id);
        /*console.log(this.newIntegranteForm.value)*/

      }
    )
   
  
  }


  getIntegrantes() {
    this.apiService.getIntegrantes()
      .subscribe(
        (res :any)=> {this.listItegrantes =res}
      )

  }
  updateIntegrante(){
   
 this.apiService.updateIntegrante(this.newIntegranteForm.value, this.id).subscribe(
  data=>{
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Modificado',
      showConfirmButton: false,
      timer: 2500
    })
    this.router.navigate(['/list'])
  }
 )

  }

  
}
