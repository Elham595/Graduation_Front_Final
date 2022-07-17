
export interface IClothe {

   clotheId:number;
   clotheName: string;
   imageUrl:string;
}

export class Clothe implements IClothe{
  clotheId!: number;
  clotheName!: string;
  imageUrl!:string;



  constructor() {
    this.clotheId = 0;
    this.clotheName = '';
    this.imageUrl='';

  }
}
