const { Server } = require('socket.io');

const realTimeProducts = [];

const init = (httpServer) => {
    const socketServer = new Server(httpServer);
    
    socketServer.on('connection', (socketClient) => {
        socketClient.emit('products', { realTimeProducts });

        socketClient.on('message', (msg) => {
            realTimeProducts.push({ msg });
            socketServer.emit('products', { realTimeProducts });
        })
    })
    
}