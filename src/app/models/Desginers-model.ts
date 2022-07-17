export interface IDesginer{
    userName:string;
    email:string;
    address:string;
    city:string;
    experienceYear:number;
    bio:string;
    gender: string;
    userNameNavigation:IUser;
    emailNavigation:IAcount;
}

export interface IUser{
    firstName: string;
    middleName : string;
    lastName : string;
    birthDate : string;
    mobileNumber : string;
}

export interface IAcount{
    Password:string;

}