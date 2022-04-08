import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLogged = this.auth.getAuth();
  errorShow : boolean = false;
  errorMessage : string = '';
  
  constructor (private auth: AuthService) { }

  logout(){
    this.auth.logout().catch(error => {this.errorShow = true; this.errorMessage = error.message; console.log("Error en ingreso",error)});
  } 
  
  ngOnInit(): void {
  }

}
