export interface IUserConnection
{
    username:String;

    connectionId:string | null;
}

export class UserConnection implements IUserConnection{
  username: String;
  connectionId: string | null;;
  /**
   *
   */

  constructor(username: String,connectionId: string | null) {
    this.username = username;
    this.connectionId = connectionId;
  }

}
