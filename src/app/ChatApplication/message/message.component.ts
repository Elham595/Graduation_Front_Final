import { Component, Input, OnInit } from '@angular/core';
import { IMessageChat, MessageChat } from 'src/app/models/chat-interface';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() connectionId: string | null;
  @Input() message: IMessageChat;
  @Input() username: String;

  constructor() {
    this.connectionId = '';
    this.message = new MessageChat(0,'', 0, '','');
    this.username= "";
  }

  ngOnInit(): void {}

  recived(): boolean {
    // if this.message.sendTo === this.connectionId means im sender
    // if !(this.message.sendTo === this.connectionId) means im reciever
    return this.message.sendTo !== this.connectionId;
  }
}
