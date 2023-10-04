import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class PaymentezService {
    constructor(
      private _http: HttpClient,

    ) { }

    public mostrarPorFechas(idUser){

      let cadena = "idUser=" + idUser;

      $.ajax({
          type: "POST",
          url: "http://localhost/paymentez/index.php",
          data: cadena,
          success: function(r) {
              window.open("http://localhost/paymentez/index.php");
              // window.location.href = "nuevaFactura.php";
          }
      });

      
      // return this._http.post(`localhost/paymentez/index.php`, {idUser} );      
    }
}