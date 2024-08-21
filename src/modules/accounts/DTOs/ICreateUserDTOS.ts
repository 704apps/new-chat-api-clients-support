interface ICreateUserDTO{
    name:string,
    password: string,
    email:string,
    role:string,

    avatar?:string,
    id?:string
}



export{ICreateUserDTO}