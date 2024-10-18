import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-color',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './favorite-color.component.html',
  styleUrl: './favorite-color.component.scss'
})
export class FavoriteColorComponent {

  // favoriteColorControl = new FormControl('');
  favoriteColor:string ='';
  number:number=0;

  addOne(){
    this.number++;
  }

}
