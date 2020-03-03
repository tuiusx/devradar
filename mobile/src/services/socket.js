import socketio from 'socket.io-client';

const socket = socketio('Seu IP com a porta do backend', {
    autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction ) {
    socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connect) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};