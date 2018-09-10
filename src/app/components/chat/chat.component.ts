import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Mensaje } from '../../models/mensaje.model';
import { Response } from '../../models/response.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = '';

  constructor(public _socket: SocketService) {
    _socket.getOwnId();
  }

  ngOnInit() {

  }

  enviarMensaje() {
    if (this.mensaje.trim().length === 0) {
      return;
    }

    this._socket.enviarMensaje({
      usuario: '',
      mensaje: this.mensaje,
    }).then((res: Response) => {
      this.mensaje = '';
    }).catch((err) => {
      alert(err.mensaje);
    });
  }

}
