import { io } from 'socket.io-client'

let socket

export function getIO() {
    if (socket) {
        return socket
    } else {
        socket = io('https://retail-store-rest-backend.onrender.com')
        return socket
    }
}