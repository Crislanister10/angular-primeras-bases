import { Component } from '@angular/core';
import { Character } from '../../interface/character.interfase'; 
import { DbzServiceService } from '../../services/dbz.service.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  
     constructor(private _dbzService : DbzServiceService){

     }

     get character(): Character[]{
        return [...this._dbzService.character]
     }

     public onDeleteCharacter (id: string){
      this._dbzService.onDeleteCharacterByID(id)
     }
     public onNewCharacter (character : Character){
      this._dbzService.onNewCharacter(character)
     }

}
