import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './../profile-editor/profile-editor.component';
import { Component } from '@angular/core';
import { state } from '@angular/animations';
import { first, zip } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
  });

  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Nancy',
      address:{
        street:'123 Drew Street'
      },
    });

  }
}
