import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { CrudLocalStorageComponent } from './crud-local-storage/crud-local-storage.component';

const routes: Routes = [
  { path: 'app-crud-firebase', component: CrudFirebaseComponent},
  { path: 'app-crud-local-storage', component: CrudLocalStorageComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  {path: '**', pathMatch: 'full', redirectTo:'app-crud-firebase'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
