export interface MessageDTO {
    
    id?: number,
    chatId?: number,
    key?: string,
    userType: string,
    projectId: string,
    supportId: string;
    messageType: string,
    msgEdt?: boolean,
    messages: string,
    origin: string
}
