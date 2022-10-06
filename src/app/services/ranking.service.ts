import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { RankingUser } from '../interface/ranking-user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private itemsCollection?: AngularFirestoreCollection<any>;
  public rankings: RankingUser[] = [];
  public userLog: any = {};

  constructor(private authService: AuthService, private afs: AngularFirestore) {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.userLog.name = user.displayName;
        this.userLog.uid = user.uid;
        this.userLog.email = user.email;
      }
    });
  }

  loadRanking() {
    this.itemsCollection = this.afs.collection<RankingUser>('ranking', ref => ref.orderBy('point', 'desc'));
    return this.itemsCollection.valueChanges().subscribe(rankings => {
      this.rankings = [];
      let max = 0;
      for (let user of rankings) {
        if (max < 10) {
          this.rankings.push(user);
          max++;
        }
      }
    });
  }

  addPoint(points: number, game: string) {
    let newPoint: RankingUser = {
      name: this.userLog.name,
      point: points,
      date: this.formatDate(new Date()),
      uid: this.userLog.uid,
      email: this.userLog.email,
      game: game
    };

    return this.itemsCollection?.add(newPoint);
  }

  dateComponentPad = (value: string) => {
    var format = value;
    return format.length < 2 ? '0' + format : format;
  }

  formatDate = (date: any) => {
    let datePart = [date.getDate(), date.getMonth() + 1, date.getFullYear()].map(this.dateComponentPad);
    let timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(this.dateComponentPad);
    return datePart.join('-') + ' ' + timePart.join(':');
  }
}
