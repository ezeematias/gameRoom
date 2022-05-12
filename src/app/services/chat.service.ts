import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Message } from "../interface/message";

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private itemsCollection?: AngularFirestoreCollection<any>;
  public chats: Message[] = [];
  public userLog: any = {};
  elements: any;

  constructor(private authService: AuthService,private afs: AngularFirestore) {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.userLog.name = user.displayName;
        this.userLog.uid = user.uid;
        this.userLog.email = user.email;
      }

    });
    }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc').limit(10));
    return this.itemsCollection.valueChanges().subscribe(chats => {
      this.chats = [];
      for (let chat of chats) {
        this.chats.unshift(chat);
      }
      setTimeout(() => {
        this.elements = document.getElementById('app-message');
        console.log(this.elements);
        this.elements.scrollTop = this.elements.scrollHeight;

      }, 20);
    });
  }

  addMessage(message: string) {
    let newMessage: Message = {
      name: this.userLog.name,
      message: message,
      date: this.formatDate(new Date()),
      uid: this.userLog.uid,
      email: this.userLog.email
    };

    return this.itemsCollection?.add(newMessage);
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
