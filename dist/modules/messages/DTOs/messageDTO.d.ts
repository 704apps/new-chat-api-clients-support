interface MessageDTO {
    id?: number;
    chatId?: number;
    key?: string;
    userType: string;
    projectId: string;
    supportId: string;
    messageType: string;
    msgEdt?: boolean;
    urlImage?: string;
    statusAttention?: string;
    messages: string;
    origin: string;
    createdAt?: Date;
}
export { MessageDTO };
