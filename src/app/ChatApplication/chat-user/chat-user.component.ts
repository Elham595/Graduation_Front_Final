import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IMessageChat, MessageChat } from '../../models/chat-interface';
import { IUserConnection, UserConnection } from '../chat-mo/user-contract';
import { ChatService } from '../chat-service.service';

@Component({
  selector: 'chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css'],
})
export class ChatUserComponent implements OnInit {

  @Input() user!: IUserConnection;
  @Input() activeUser!: IUserConnection;

  messages!: Array<IMessageChat>;
  show: Boolean;
  message: string;

  constructor(private chatService: ChatService) {
    this.user = new UserConnection('', '');
    this.messages = Array<IMessageChat>();
    this.show = false;
    this.message = '';
  }

  ngOnInit(): void {
    console.log(this.user);
    console.log(this.user.connectionId);
    console.log(this.user.username);

    this.chatService.messageReceived.subscribe((recivedMessage) => {
      console.log('message recived', recivedMessage.message);
      console.log('message recived', recivedMessage.message.messageText);
      if (recivedMessage.user.connectionId === this.user.connectionId)
        this.messages.push(recivedMessage.message);
      console.log(this.user.connectionId, this.messages);
    });
  }

  chatOrhide(): void {
    if (this.show) this.show = false;
    else this.show = true;
  }

  hasText(): boolean {
    return this.message.length > 0;
  }
  //send message and afdyha
  Send() {
    if (this.message) {
      const message = new MessageChat(
        0,
        'New Message',
        0,
        this.message,
        this.user.connectionId
      );
      this.chatService.sendMessage(this.user, message);
      this.messages.push(message);
      console.log(message);
      this.message = '';
    }
  }
}
