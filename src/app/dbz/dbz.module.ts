import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    MainPageComponent,
    AddCharacterComponent
  ],
  exports:[MainPageComponent,ListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DBZModule { }
