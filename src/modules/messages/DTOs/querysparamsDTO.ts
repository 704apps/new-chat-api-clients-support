

export interface QuerySearchProject{
    supportId:string;
    project:string;
}


export interface QuerySearchWordPhrase{
    supportId:string;
    word_phrase:string;
}

export interface QuerySearchGeneral{
    supportId:string;
    general:string;
}

export interface QueryMessage{
    supportId:string;
    general:string;
}
export interface UploadDataDTO{
    filename:string;
    filecontent:Buffer;
    messages:string;
    key:string;
    userType:string;
    projectId:string;
    supportId:string;
    origin:string;
    messageType:string;

}