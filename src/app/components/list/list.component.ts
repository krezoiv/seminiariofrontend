import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Integrantes } from 'src/app/models';

import { ApiServicesService } from 'src/app/service/api-services.service';
import { DialogComponent, } from '../dialog/dialog.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

listItegrantes!: any [];
readonly width : string= '30'


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
    public dialogRef: MatDialog,
    private apiService: ApiServicesService
  ) { }

  ngOnInit(): void {
    this.getIntegrantes();
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
        
      //  this.ngOnInit();
        this.newIntegranteForm.reset();
        
      })
  }
    

  saveIntegrante(){
    this.addIntegrante();
  }


  deleteIntegrante(id: string){
    this.apiService.deleteIntegrante(id)
      .subscribe(data => {
       // this.ngOnInit();
      })
  }


  openEdit(list: Integrantes){
   const dialogRef = this.dialogRef.open(UpdateComponent,{
    width:'300',
    data: list
   })
  
  }
  
}
