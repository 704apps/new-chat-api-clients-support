
import { MessageDTO } from "@modules/messages/DTOs/messageDTO";
import { SaveMessageController } from "@modules/messages/useCases/saveMessages/SaveMessageController";
import { AppError } from "@error/AppError";
import { io } from '../http/server'
const saveMessageController = new SaveMessageController();



console.log("SocketIOServer created");

export function setupSocketIO() {
    console.log("Setting up SocketIO");

    io.on("connection", (socket) => {
        console.log("New client connected");

        //Cliente envia mensagem
        socket.on("clientMessage", async (data) => {
            try {
                console.log(data)

                const msg: MessageDTO = (await saveMessageController.saveMessage(
                    data
                )) as MessageDTO;
                console.log('dfdfdfdfdf')
                const socketUser = data.supportId;
                const dataClient = {
                    id: msg.id,
                    chatId: msg.chatId,
                    key: data.key,
                    userType: data.userType,
                    projectId: data.projectId,
                    supportId: data.supportId,
                    messageType: data.messageType,
                    messages: data.messages,
                    origin: data.origin,
                    createdAt: msg.createdAt
                }
                console.log('dataClient')
                console.log(dataClient)
                console.log('dataCldsfdfdient')
                io.to('support').emit('supportMessage', dataClient);
                // if (!data.supportId) {
                //   io.to('support').emit('supportMessage', dataClient);
                // } else {
                //   io.to(data.supportId).emit('supportMessage', data);

                // }
                console.log(msg)

            } catch (error) {
                throw new AppError('Unexpected error', 400, { error })
            }
        });




        //Suporte envia mensagem
        socket.on("supportMessage", async (data: MessageDTO) => {
            try {


                const socketProject = data.projectId;
                console.log(data)
                const msg: MessageDTO = (await saveMessageController.saveMessage(
                    data
                )) as MessageDTO;


                const dataClient = {
                    id: msg.id,
                    chatId: msg.chatId,
                    key: data.key,
                    userType: data.userType,
                    projectId: data.projectId,
                    supportId: data.supportId,
                    messageType: data.messageType,
                    messages: data.messages,
                    origin: data.origin,
                    createdAt: msg.createdAt
                }

                console.log(dataClient)


                await io.to(socketProject).emit('clientMessage', dataClient);
                //await io.to('support').emit('supportMessage', dataClient);
                await io.to('support').emit('supportResponse', dataClient);
            } catch (error) {
                throw new AppError('Unexpected error', 400, { error })
            }
        })



        socket.on("statusAttentionUpdate", async () => {
            io.to('support').emit('supportMessage');
        })


        //Adiciona o cliente à sala especifica
        socket.on('joinRoom', (data) => {

            if (data.room === 'support') {
                socket.join('support');

            } else {
                const socketProject = data.projectId;
                socket.join(socketProject);

            }

        })

        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });



    });
    console.log("SocketIO setup complete");

}

