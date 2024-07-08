export interface MessageDTO {
    
    id?: number,
    userType: string,
    socketId: string,
    projectId: string,
    supportId: string;
    messageType: string,
    messages: string,
    orige: string
}
