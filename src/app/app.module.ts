import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GamesComponent } from './pages/games/games.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { SpinnerModule } from './components/spinner/spinner.module';
import { ChatComponent } from './components/chat/chat.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB5NbwexCmQ3_35Mc31xGsoQHRQY1o9E74",
  authDomain: "eu-gameroom.firebaseapp.com",
  projectId: "eu-gameroom",
  storageBucket: "eu-gameroom.appspot.com",
  messagingSenderId: "673709754300",
  appId: "1:673709754300:web:cbb800047ae61fab78cdb9"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    QuienSoyComponent,
    ErrorComponent,
    NotFoundComponent,
    GamesComponent,
    TatetiComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
