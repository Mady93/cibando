import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importare home e le ricette
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
//############
import { DetailComponent } from './components/recipes/detail/detail.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path:'ricette',component: RecipesComponent,children: [
    {path: 'dettaglio/:_id', component: DetailComponent},
    {path:'', pathMatch: 'full', component: RecipesListComponent}
  ]},

  // {path: 'ricette',component: RecipesComponent},
 // {path: 'dettaglio/:_id', component: DetailComponent},
  //{path: '**',nomeComponente404}
  {path: '**',redirectTo: 'home'}

];

@NgModule({
  //aggiungere lo scroll per mobile {scrollPositionRestoration: 'enabled'} oppure {scrollPositionRestoration: 'top'}
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
