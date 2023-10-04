import { Injectable } from '@angular/core';
import {io, Socket} from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: Socket;
  status: boolean;

  constructor() { }

  socketConnect(id: any,  customer: any) {
    this.socket = io(`${environment.URL_WEBSOCKET }/ticket-select`, {
      query: {id, customer} ,
    });
  }

  socketMessage() {
    return this.socket;
  }

  subscribeSocket(topic, customer) {
    this.socket.emit('subscribe-seat', {topic,   customer});
  }

  reserveSeat(topic, position, endTime, customer){
    this.socket.emit('ticket-select', {
      type: 'selected',
      topic,
      position,
      endTime,
      customer,
    });
  }

  //reserveSeat(topic, position, endTime, customer){
    //this.socket.emit('reserve-seat', {topic, position, endTime, customer});
  //}

  cancelSeat(topic, customer){
    this.socket.emit('ticket-select', {topic, customer, type: 'cancel'});
  }

  cancelSeatSelect(topic, customer, position){
    this.socket.emit('ticket-select', {topic, customer, position, type: 'cancel-oneSeat'})
  }

  socketClose(topic, customer) {
    this.socket.emit('unsubscribe-seat', {topic, customer});
  }
}