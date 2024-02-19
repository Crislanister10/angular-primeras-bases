import { Component, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interfase';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-add-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input()
  public characterList: Character []=[{
    name: "",
    power: 2
   }]

   @Output()
    public onDelete: EventEmitter<string> = new  EventEmitter();
   
    

   onDeleteCharacter(id ?: string):void{
    if(!id) return;
    this.onDelete.emit(id)
    console.log({id})
   }
}

