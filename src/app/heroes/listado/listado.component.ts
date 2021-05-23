import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string[]=['Spiderman','hulk','goku','ironman'];
  heroeB:string="";

  borrarHeroe():void{
    
    const heroeBorrado:string|undefined=this.heroes.shift();
    this.heroeB=heroeBorrado || '';
    console.log(heroeBorrado);
  } 
}
