import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import{DividerModule} from "primeng/divider";
import{PasswordModule} from "primeng/password";
import{ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrazioneComponent } from './user/registrazione/registrazione.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { NuovaRicettaComponent } from './components/nuova-ricetta/nuova-ricetta/nuova-ricetta.component';
import { LoginComponent } from './components/components/user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ResultComponent } from './components/result/result.component';

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
    NuovaRicettaComponent,
    LoginComponent,
    ProfileComponent,
    ResultComponent

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
    NgbCollapseModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
