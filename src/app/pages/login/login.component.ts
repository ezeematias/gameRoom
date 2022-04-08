import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor (private auth: AuthService, private router:Router, private readonly fb: FormBuilder) { }

  usuario = new User(); 

  errorShow : boolean = false;
  errorMessage : string = '';

  getValue(value:string): AbstractControl {
    return this.form.get(value) as FormGroup;
  }

  get emailCtrl(): AbstractControl {
    return this.form.get('email') as FormGroup;
  }

  get passwordCtrl(): AbstractControl {
    return this.form.get('password') as FormGroup;
  }  

  ingresar() {
    console.log(this.usuario);
    this.auth.login(this.usuario.email, this.usuario.password).then(res => {      
      console.log("Ingresó",res)}).catch(error => {this.errorShow = true; this.errorMessage = error.message; console.log("Error en ingreso",error)});
  }

  ingresarConGoogle() {
    console.log(this.usuario);
    this.auth.loginWuthGoogle(this.usuario.email, this.usuario.password).then(res => {
      console.log("Se logueo",res)}).catch(error => {this.errorShow = true; this.errorMessage = error.message; console.log("Error en ingreso",error)});
  }

  getUserLog(){
    this.auth.getAuth().subscribe(name => {
      console.log(name?.displayName , name?.email);
    }); 
  } 

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")],      
      password: ['', [Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
