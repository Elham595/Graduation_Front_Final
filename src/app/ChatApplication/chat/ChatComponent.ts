import {
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  HostListener,
  ComponentFactoryResolver,
} from '@angular/core';
import { ChatService } from '../chat-service.service';
import { IMessageChat } from '../../models/chat-interface';
import { IUserConnection } from '../chat-mo/user-contract';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  // txtMessage: string = '';
  // message!: IMessageChat;
  // DesignOrderNumber!: number;
  // messages!: IMessageChat[];
  // SendFrom!: string;
  // SendTo!: string;
  // DesignType!: string;

  onlineUsers!: Array<IUserConnection>;
  filtedOnlineUsers!: Array<IUserConnection>;
  currentUser!: IUserConnection;
  constructor(private chatService: ChatService) {
    this.subscribeToEvents();
  }

  ngOnDestroy(): void {
    this.chatService.stopConnectionAsync();
  }

  @HostListener('window:pagehide', ['$event'])
  @HostListener('window:beforeunload', ['$event'])
  @HostListener('window:unload', ['$event'])
  handleWindowClosed(event: any) {
    console.log(event);
    event.returnValue = false;
    event.preventDefault();
    event.stopPropagation();
    window.alert('handleWindowClosed');
    this.ngOnDestroy();
    return false;
  }

  ngOnInit(): void {

    // this.onlineUsers = this.filtedOnlineUsers = new Array<IUserConnection>();
    // console.log("helllooo this is online users from chat cpmponent"+this.onlineUsers);
  }

  isLogedInUser(user:IUserConnection):boolean{
    console.log('my user id',this.connectionId);
    console.log('other user Id',user.connectionId)
    console.log("hshof lw user d ana wla l2 3shan abana lw tl3 ana ")
    return user.connectionId === this.connectionId;

  }

  // sendMessage(): void {
  //   if (this.txtMessage) {
  //     this.message.designOrderNumber = this.DesignOrderNumber;
  //     this.message.sendFrom = this.SendFrom;
  //     this.message.sendTo = this.SendTo;
  //     this.message.messageHead = 'sent';
  //     this.message.messageText = this.txtMessage;
  //     this.message.messageDate = new Date();
  //     this.messages.push(this.message);
  //     this.chatService.sendMessage(this.currentUser, this.message);
  //     this.txtMessage = '';
  //   }
  // }

  get connectionId() {
    console.log("get connection id from chat component to chat serveice")
    return this.chatService.connectionId();
  }
//Resceive message and  push it
  private subscribeToEvents(): void {
    // this.chatService.messageReceived.subscribe((message: IMessageChat) => {
    //   this._ngZone.run(() => {
    //     if (message.sendFrom !== this.SendTo) {
    //       message.messageHead = 'received';
    //       this.messages.push(message);
    //     }
    //   });
    // });
//Array Of users
    this.chatService.userConnected?.subscribe(
      (connectedUsers: Array<IUserConnection>) => {
        this.onlineUsers = [];
        console.log("hello from array of online uses"+this.onlineUsers);


        this.onlineUsers.length = 0;
        this.onlineUsers = this.filtedOnlineUsers = connectedUsers;
          console.log("hello from array of online uses"+this.filtedOnlineUsers,connectedUsers);


      }
    );
  }
//click on to open chat
  setActiveChatUser(user: IUserConnection) {
    this.currentUser = user;
    console.log("window opened");
    console.log("current user");
  console.log(this.currentUser)

  }
  clicked(user: IUserConnection) {
    this.currentUser = user;
  }

  filterUsername(event: any) {
    this.filtedOnlineUsers = this.onlineUsers.filter((user) =>
      user?.username?.toLowerCase()?.includes(event.target.value.toLowerCase())
    );
  }
}
