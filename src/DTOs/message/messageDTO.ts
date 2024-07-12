export interface MessageDTO {
    
    id?: number,
    userType: string,
    projectId: string,
    supportId: string;
    messageType: string,
    msgEdt?: boolean,
    messages: string,
    origin: string
}
