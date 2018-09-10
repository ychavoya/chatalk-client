import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { environment } from '../../../environments/environment';
import { Mensaje } from '../../models/mensaje.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = '';

  constructor(private _socket: SocketService) {

    _socket.recibirMensaje.subscribe((mensaje: Mensaje) => {
      console.log(mensaje);
    });

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
    }).then((data) => {
      this.mensaje = '';
      console.log(data);
    }).catch((err) => {
      alert(err.mensaje);
    });
  }

}
