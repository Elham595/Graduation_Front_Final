import { Clothe, IClothe } from "./clothe";

export interface IDesign {

   DesignId:Number;
   Status: string;
   DesignDate: Date;
   ClotheId: Number;
   File: File;
   imageUrl:string
   cloth:IClothe
}

export class Design implements IDesign{
  DesignId!: Number;
  Status!: string;
  DesignDate!: Date;
  ClotheId!: Number;
  File!: File;
  imageUrl!: string;
  cloth!: IClothe;

  constructor(){
      this.DesignId = 0;
      this.Status='';
      this.ClotheId = 0;
      this.cloth = new Clothe();
  }

}
