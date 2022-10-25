import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Integrantes } from 'src/app/models';

import { ApiServicesService } from 'src/app/service/api-services.service';
import swal from 'sweetalert2'

import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

ipAddress!:string;
listItegrantes!: any [];
divSave : boolean= true;
divUpdate : boolean = true

id : string = ""
newIntegranteForm : FormGroup = this.fb.group({

  carnet: [''],
  nombres: [''],
  apellidos: [''],
  telefono: [''],
  email: [''],

})
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRouter : ActivatedRoute,
    private apiService: ApiServicesService,
    
  ) { }

  ngOnInit(): void {
    this.getIP();
    this.getIntegrantes();
    //this.id = this.activateRouter.snapshot.params['id'];
    //console.log(this.id)
  }

  

  getIntegrantes() {
    this.apiService.getIntegrantes()
      .subscribe(
        (res :any)=> {this.listItegrantes =res}
      )

  }

  

  addIntegrante(){
    this.apiService.addIntegrante(this.newIntegranteForm.value)
      .subscribe(data => {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Agregado',
          showConfirmButton: false,
          timer: 2500
        })
        this.ngOnInit();
        this.newIntegranteForm.reset();
        
      })
  }
    

  saveIntegrante(){
    this.addIntegrante();
  }


  deleteIntegrante(id: string){
    this.apiService.deleteIntegrante(id)
      .subscribe(data => {
        swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 2500
        })
       this.ngOnInit();
      })
  }

  getIP()  
  {  
    this.apiService.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
    });  
  }  
  
}
