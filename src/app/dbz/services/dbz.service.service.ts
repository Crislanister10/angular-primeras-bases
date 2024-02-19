import { EventEmitter, Injectable, Output } from '@angular/core';
import { Character } from '../interface/character.interfase';
import {v4  as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzServiceService {

  constructor() { }


  public character: Character []=[{
    id: uuid(),
    name: "Goku",
    power: 2000
   },
   {
     id: uuid(),
     name: "Pikoro",
     power: 4000
   }

 ]


 onNewCharacter(character : Character): void{

    const newCharacter : Character = {id: uuid(), ...character}

    this.character.push(newCharacter)
 }
 /* onDeleteCharacter(index : number):void{
   this.character.splice(index,1);
 } */
   onDeleteCharacterByID(id: string){
     this.character = this.character.filter(character => character.id != id)
   
   }

}
