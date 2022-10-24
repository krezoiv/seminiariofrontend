import { Integrantes } from "./models";

export interface Integrantes_I{
    id? : string,
    carnet: string,
    nombres? : string,
    apellidos? : string,
    telefono? : string,
    email? : string,
  
  }

  export interface List{
    list: [];
  }
  
  export interface Int{
     Integrantes:[]
  }