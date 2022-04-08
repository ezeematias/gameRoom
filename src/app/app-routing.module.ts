import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  {
    path: 'juegos', component: GamesComponent, children: [
      { path: 'tateti', component: TatetiComponent },
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
