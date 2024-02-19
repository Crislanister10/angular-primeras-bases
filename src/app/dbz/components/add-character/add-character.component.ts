import { Component, Output } from '@angular/core';
import { Character } from '../../interface/character.interfase';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {

  @Output()
 public onNewCharacter: EventEmitter<Character> = new  EventEmitter();

  public character: Character ={
    name: "",
    power: 0
   }

   emitCharacter(): void{

    if (this.character.name.length ==0) {return;}
      
    this.onNewCharacter.emit(this.character)
    console.log(this.character)
   }
}
