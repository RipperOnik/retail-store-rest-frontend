import { io } from 'socket.io-client'

let socket

export function getIO() {
    if (socket) {
        return socket
    } else {
        socket = io('http://localhost:8080')
        return socket
    }
}