import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { updateProfile, getAuth } from '@firebase/auth';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router: Router) { }

  async login(email: string, password: string): Promise<boolean> {

    return await this.afauth.signInWithEmailAndPassword(email, password).then(res => this.router.navigate(['juegos/ahorcado'])).catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/internal-error':
          throw new Error('Credenciales Inválidas');
        default:
          throw new Error(error.message);
      }
    });
  }

  async loginWuthGoogle(email: string, password: string) {
    return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => this.router.navigate(['juegos/ahorcado'])).catch(error => {
      throw new Error('Error de logueo de Google');
    });
  }

  async register(email: string, password: string) {
    return await this.afauth.createUserWithEmailAndPassword(email, password).then(res => this.router.navigate([''])).catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          throw new Error('Mail Inválido');

        case 'auth/email-already-in-use':
          throw new Error('El correo ya se encuentra en uso');

        default:
          throw new Error(error.message);
      }
    });
  }

  async uploadUser(name: string) {
    let auth = getAuth();
    return await updateProfile(auth.currentUser!, { displayName: name }).catch(
      (err) => console.log(err));
  }

  async logout(): Promise<boolean> {
    return await this.afauth.signOut().then(res => this.router.navigate(['login'])).catch(error => {
      ;
      throw new Error('Error en desloguearse');
    });
  }

  getAuth() {
    return this.afauth.authState;
  }
}