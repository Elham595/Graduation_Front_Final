import { ConstantPool } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subscription } from 'rxjs';
import { AccountService } from '../account.service';
import { IMessageChat, IRecivedMessage, RecivedMessage } from '../models/chat-interface'
import { IUserConnection } from './chat-mo/user-contract';
@Injectable({
  providedIn: 'root',
})

export class ChatService {
  messageReceived!: EventEmitter<IRecivedMessage>;
  //connectionEstablished!: EventEmitter<Boolean>;
  userConnected!: EventEmitter <Array<IUserConnection>>;

  private connectionIsEstablished = false;
  private _hubConnection!: HubConnection;

  constructor(private accountService: AccountService) {
    this.messageReceived = new EventEmitter<IRecivedMessage>();
    //this.connectionEstablished = new EventEmitter<Boolean>();
    this.userConnected = new EventEmitter<Array<IUserConnection>>();
    console.log("welcom from chat server constructor");

    this.createConnection().add(() => {
      this.startConnection();
      this.registerOnServerEvents();
    });
  }

  sendMessage(userConnection: IUserConnection, message: IMessageChat) {
    message.sendFrom = this._hubConnection.connectionId;
    this._hubConnection.invoke('SendMessage', userConnection, message);
    console.log("Hiiiiiiiiiiiiii we are ready to send message");

  }

  connectionId()
  {
    return this._hubConnection.connectionId;
  }
  //define connection
  private createConnection(): Subscription {
    console.log('Creating Connection');
    return this.accountService
      .getAccessToke()
      .subscribe((tokenResponse) => {
        console.log(
          'Configure Hub Connection With Access Token:' + ' ' + tokenResponse
        );
        this._hubConnection = new HubConnectionBuilder()
          .withUrl('https://localhost:7063/chat', {
            accessTokenFactory: () => tokenResponse.token,
          })
          .build();

        console.log('access_token returned', tokenResponse.token);


      });
  }

  private startConnection(): void {
    console.log('Starting Hub Connection');
    console.log(this._hubConnection);
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log('Hub connection started');
       // this.connectionEstablished.emit(true);
      })
      .catch((err: any) => {
        console.log('Error while establishing connection, retrying...',err);
      });
  }

  private registerOnServerEvents(): void {

    this._hubConnection.on(
      'ConnectionChanged',
      (connectedUsers: Array<IUserConnection>) => {
        console.log('Users Changed');
        console.log("Hello from register on evrnt chat service",connectedUsers);
        this.userConnected.emit(connectedUsers);
      }
    );

    this._hubConnection.on('ReciveMessage', (connection: IUserConnection, message: IMessageChat) => {
      this.messageReceived.emit(new RecivedMessage(connection, message));
      console.log("Hiiiiiiiiiiiiii we are ready to recieve message");
    });

    this._hubConnection.onclose( async (err: any) => {
      console.log('disconnected');
      await  this._hubConnection.stop();
      console.error(err);

    });
  }

  public stopConnectionAsync(): void{
     this._hubConnection.stop();
     console.log("Hello from stop");

  }
}
