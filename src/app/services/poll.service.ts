import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  polls: any;
  constructor(private db: AngularFirestore) { }

  public async registerPoll(poll: FormGroup) {
    this.polls = {
      lastName: poll.get("lastname")?.value,
      name: poll.get("name")?.value,
      age: poll.get("age")?.value,
      cellPhone: poll.get("cellPhone")?.value
    }
    return await this.db.collection('polls').add(this.polls);
  }
}
