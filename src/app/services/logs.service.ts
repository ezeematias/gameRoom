import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs: any;

  constructor(private db: AngularFirestore) { }

  public async registerUserLoginTime(user: FormGroup) {
    this.logs = {
      email: user.get('email')?.value,
      loginTime: new Date().toLocaleString(),
    }
    return await this.db.collection('logs').add(this.logs);
  }

  async getLogs() {
    return await this.db.collection('logs').valueChanges();
  }
}
