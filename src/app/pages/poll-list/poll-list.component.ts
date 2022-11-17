import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  public users: any = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getCollection('polls').subscribe(users => {
      this.users = users;
      console.log(users);
    })
  }
}
