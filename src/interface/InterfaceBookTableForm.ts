export interface FormValues {
    name:string;
    phoneNumber:string;
    email:string;
    guests:number;
    date:string;
    time:string;
}

export interface FormErrors {
    errorName?:string;
    errorPhoneNumber?:string;
    errorEmail?:string;
    errorGuests?:string;
    errorDate?:string;
    errorTime?:string;
}