import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userLogged = this.authService.getAuth(); 

  constructor(private authService : AuthService, private spinnerService:SpinnerService) {     
  }

  ngOnInit(): void {   
  }  



}
