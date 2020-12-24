class Sockets {
    constructor() {

    }

    socketEvents() {
        // Para emitir mensajes a todos los clientes conectados
        // Se utiliza el io, para ciertos clientes en ciertas vistas
        // Se utiliza el callback del metodo on
        io.on('connection', ( socket ) => {

            // Emite mensaje al front
            // socket.emit('mensaje-bienvenida', {
            //     msg: 'Bienvenido a este servidor 4K',
            //     fecha: new Date()
            // });

            // Escuchar evento
            // socket.on('mensaje-cliente', ( data ) => {
            //     console.log(data);
            // });
            socket.on('mensaje-to-server', ( data ) => {
                io.emit('mensaje-from-server', data);
            });
        });

    }
}

module.exports = Sockets;