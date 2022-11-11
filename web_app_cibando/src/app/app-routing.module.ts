import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importare home e le ricette
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';

//si lavora solo nell'array di router
const routes: Routes = [
  // per default la directory - pathMatch:'full'- se scrivo e non specifico n percorso porta sempre alla home a prescindere del tip della url
  {path:'',redirectTo: 'home',pathMatch:'full'},
  //path -nome percorso,il componente che deve richhiamare
  {path: 'home',component: HomeComponent},
  {path: 'ricette',component: RecipesComponent},

  //{path: '**',nomeComponente404}
  {path: '**',redirectTo: 'home'}

];

@NgModule({
  //aggiungere lo scroll per mobile {scrollPositionRestoration: 'enabled'} oppure {scrollPositionRestoration: 'top'}
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
