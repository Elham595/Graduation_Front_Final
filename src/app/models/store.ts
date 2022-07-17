export interface IStore {
    address: string;
    city: string
    clientStoreOrders: Array<any>
    email: string
    emailNavigation: any | null
    fabricOfStores: Array<any>
    storeId: number
    storeName: string
    userName: string
    userNameNavigation: any | null
}
export interface IFabricStore{
    storeId: number,
    fabricId: number,
    colorId: number,
    price:number,
    // "color": null,
    // "fabric": null,
    // "store": null
}

export interface IFabricStoreDetails{
    fablicName:string;
    fabricColor:string;
    price:number;
}

export class FabricStoreDetails implements IFabricStoreDetails{
    fablicName: string;
    fabricColor: string;
    price: number;
    /**
     *
     */
    constructor(fablicName: string,fabricColor:string,price:number) {
        this.fablicName=fablicName;
        this.fabricColor=fabricColor;
        this.price = price;
    }
}