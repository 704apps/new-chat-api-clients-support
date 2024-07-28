interface ICreateUserDTO{
    name:string,
    password: string,
    email:string,
    avatar?:string,
    id?:string
}



export{ICreateUserDTO}