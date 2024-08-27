import { OldMessages } from "./OldMessages";
declare class Messages {
    id: number;
    userType: string;
    chatId: number;
    projectId: string;
    supportId: string;
    messageType: string;
    urlImage: string;
    messages: string;
    message: OldMessages[];
    oldMessages: string;
    msgEdt: boolean;
    origin: string;
    createdAt: Date;
    updatedAt: Date;
}
export { Messages };
