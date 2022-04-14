import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent implements OnInit {

 

  constructor(private spinner : SpinnerComponent) { 
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

}
