import { NgModule,NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "../chat/ChatComponent";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChatService } from '../chat-service.service';
import { ChatUserComponent } from '../chat-user/chat-user.component';
import { MessageComponent } from '../message/message.component';



@NgModule({
  declarations: [
    ChatComponent,
    ChatUserComponent,
    MessageComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    ChatComponent,
    ChatUserComponent,
    MessageComponent
  ],
  providers:[ChatService]

})
export class ChatMoModule {

}
