import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Integrantes_I } from 'src/app/interfaces';
import { Integrantes } from 'src/app/models';
import {IntegrantesAlumnos, ApiServicesService } from 'src/app/service/api-services.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 
  constructor(
  
  ) { }

  ngOnInit(): void {
    
  }

}
