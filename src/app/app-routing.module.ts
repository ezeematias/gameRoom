import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GamesComponent } from './pages/games/games.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { AskedComponent } from './components/asked/asked.component';
import { AnagramComponent } from './components/anagram/anagram.component';
import { PollComponent } from './pages/poll/poll.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'encuesta', component: PollComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
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
