import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {
        path:'inicio',
        component:InicioComponent
    }
    ,
    {
        path:'reactivo',
        component:ProfileEditorComponent
    }
    ,
    {
        path:'reactivoForms',
        component:ReactiveFormsComponent
    }
];
