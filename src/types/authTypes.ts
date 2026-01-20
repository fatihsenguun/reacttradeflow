export interface DtoLoginIU{
    email:string;
    password:string;
}

export interface DtoLogin{
    accessToken : string;
    refreshToken: string;
    firstName: string;
    lastName : string;
    role:string;
}