import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GamesComponent } from './pages/games/games.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { AskedComponent } from './components/asked/asked.component';
import { AnagramComponent } from './components/anagram/anagram.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  {
    path: 'juegos', component: GamesComponent, children: [
      { path: 'ahorcado', component: HangmanComponent },
      { path: 'cartas', component: CardGameComponent },
      { path: 'preguntados', component: AskedComponent },
      { path: 'anagrama', component: AnagramComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
