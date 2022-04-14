import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gameRoom';
  
  public loading :boolean = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = true;
    }, 5000);
}
  
}
