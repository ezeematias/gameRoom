import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.scss']
})
export class LoginErrorComponent implements OnInit {

  @Input() color!: string;
  @Input() mensaje!: string;

  public errorMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
