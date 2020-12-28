// Servidor de express
const express  = require('express');
// Servidor de sockets
const http     = require('http');
// Socket
const socketio = require('socket.io');
// Path
const path     = require('path');
const Sockets = require('./sockets');

// cors
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer(this.app);
 
        // Configuración del socket server
        this.io = socketio(this.server, { /* Configuraciones */ });
    }

    execute(){
        
        // Inicializar middlewares
        this.middlewares();

        // Inicializar Sockets
        this.configurarSockets();

        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        });
    }

    middlewares(){
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' )) );

        // CORS
        this.app.use(cors());
    }

    configurarSockets() {
        new Sockets( this.io );
    }
}

module.exports = Server;