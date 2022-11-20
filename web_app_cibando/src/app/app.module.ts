import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrazioneComponent } from './user/registrazione/registrazione.component';
import{PasswordModule} from "primeng/password";
import{DividerModule} from "primeng/divider";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ContattiComponent } from './contacts/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecipesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    RegistrazioneComponent,
    ContattiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    PasswordModule,
    BrowserAnimationsModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
