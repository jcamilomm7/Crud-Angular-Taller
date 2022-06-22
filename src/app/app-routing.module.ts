import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: 'app-crud-firebase', component: CrudFirebaseComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  {path: '**', pathMatch: 'full', redirectTo:'app-home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
