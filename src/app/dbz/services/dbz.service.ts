import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
   
    private _personajes:Personaje[]=[{
        nombre:"Goku",
        poder:152222
      },
      {
        nombre:"Veguetta",
        poder:15000
      },
      {
        nombre:"Krillin",
        poder:5000
      }
    ];
    get personajes():Personaje[]{
        return [...this._personajes];
    }
    constructor(){
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }

}