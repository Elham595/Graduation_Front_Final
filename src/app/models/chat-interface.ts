import { IUserConnection, UserConnection } from "../ChatApplication/chat-mo/user-contract";

export interface IMessageChat {
  id:number;
  messageDate:Date;
  sendFrom:string | null;
  sendTo:string|null;
  designOrderNumber:Number | null;
  messageText:string;
  messageHead:string;
}

export class MessageChat implements IMessageChat{
  id: number;
  messageDate: Date;
  sendFrom: string | null;
  sendTo: string|null;
  designOrderNumber: Number | null;
  messageText: string;
  messageHead: string;
  /**
   *
   */
  constructor(id:number, messageHead:string,designOrderNumber:Number | null,messageText:string,sendTo:string|null) {
    this.id = id;
    this.messageHead = messageHead;
    this.designOrderNumber = designOrderNumber;
    this.messageText = messageText;
    this.sendTo = sendTo;
    this.messageDate = new Date(Date.now());
    this.sendFrom = '';
  }



}

export interface IRecivedMessage{
  user:IUserConnection
  message:IMessageChat;
}

export class RecivedMessage implements IRecivedMessage{
  user: IUserConnection;
  message: IMessageChat;

  constructor(user:IUserConnection, message:IMessageChat){
    this.user = new UserConnection(user.username,user.connectionId);
    this.message =
     new MessageChat(message.id, message.messageHead
      ,message.designOrderNumber,message.messageText,
      message.sendTo)
  }

}
