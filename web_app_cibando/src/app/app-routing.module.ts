import { NgModule } from '@angular/core';
import { RouterModule, Routes,  CanActivate } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';

import { NuovaRicettaComponent } from './components/nuova-ricetta/nuova-ricetta/nuova-ricetta.component';
import { RegistrazioneComponent } from './user/registrazione/registrazione.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './components/components/user/login/login.component';

//importo la guardia delle rotte
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {path: 'ricette',component: RecipesComponent,children: [
      { path: 'dettaglio/:title/:_id', component: DetailComponent },
      { path: '', pathMatch: 'full', component: RecipesListComponent },
    ],
  },

  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'contatti', component: ContattiComponent },
  {path: 'nuova-ricetta',component: NuovaRicettaComponent,canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent },
  {path: 'profilo',component: ProfileComponent,canActivate: [LoggedInGuard]},
  //{path: '**',nomeComponente404}
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  //aggiungere lo scroll per mobile {scrollPositionRestoration: 'enabled'} oppure {scrollPositionRestoration: 'top'}
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
