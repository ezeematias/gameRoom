import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string = "";

  constructor(public chatService: ChatService) {
  }
  
  ngOnInit(): void {
    this.chatService.loadMessages();
  }

  sendMessage() {
    if (this.message.length > 0) {
      this.chatService.addMessage(this.message)?.then(() => { console.log('Message sent') }).catch(() => { console.log('Error sending message') }).finally(() => { this.message = '' });
    }
  }

}
