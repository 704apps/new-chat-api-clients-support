export interface MessageDTO {
    
    id?: number,
    userType: string,
    socketId: string,
    projectId: string,
    supportId: string;
    messageType: string,
    msgEdt?: boolean,
    messages: string,
    orige: string
}
