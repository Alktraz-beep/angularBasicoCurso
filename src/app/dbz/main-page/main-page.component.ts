import { Component } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
   
  nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:1000
  }

  // get personajes():Personaje[]{
  //   return  this.DbzService.personajes;
  // }

  // agregarNuevoPersonaje(event:Personaje){
  //   this.personajes.push(event);
  // }

  constructor(){
    
  }
  
  
}
