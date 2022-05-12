import { Component, OnInit } from '@angular/core';
import {  } from "firebase/firestore";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  //public items: Observable<any[]>;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
