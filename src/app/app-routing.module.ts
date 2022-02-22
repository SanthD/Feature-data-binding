import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfElseComponent } from './components/ifelse.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SampleComponent } from './components/sample.component';
import { TaskComponent } from './components/task.component';
import { TittleComponent } from './components/tittle.component';
import { TittleRefrenceComponent } from './components/tittlerefrence.component';

const routes: Routes = [
  {
    path:'',
    component:TittleComponent
  },
  {
    path:'Tittle',
    component:TittleComponent
  },
  {
    path:'TittleRefrence',
    component:TittleRefrenceComponent
  },
  {
    path:'IfElse',
    component:IfElseComponent
  },
  {
    path:'Sample',
    component:SampleComponent
  },

  {
    path:'Aleternate',
    component:SampleComponent
  },
  {
    path:'Task',
    component:TaskComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Registration',
    component:RegistrationComponent
  },
 {
    path:'**',
    component:TittleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  componentsRefs = [
  IfElseComponent,TittleRefrenceComponent,TittleComponent,SampleComponent,
  TaskComponent,LoginComponent,
  RegistrationComponent,
];
