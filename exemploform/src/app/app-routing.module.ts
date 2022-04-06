import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './news/home/home.component';
import { ContatoComponent } from './viwes/contato/contato.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contato", component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
