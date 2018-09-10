import { Injectable, EventEmitter } from '@angular/core';
import io from 'socket.io-client';
import { Socket } from 'socket.io';
import { Mensaje } from '../models/mensaje.model';
import { Response } from '../models/response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  public mensajes: Mensaje[] = [];

  public recibirMensaje: EventEmitter<Mensaje> = new EventEmitter();

  constructor() {
    this.socket = io(environment.serverURL);

    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });

    this.socket.on('mensaje', (mensaje: Mensaje) => {
      this.recibirMensaje.next(mensaje);
      this.mensajes.push(mensaje);
    });

  }

  public enviarMensaje(mensaje: Mensaje) {
    return new Promise((resolve, reject) => {
      this.socket.emit('mensaje', mensaje, (data: Response) => {
        if (data.status === 200) {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  }

}
