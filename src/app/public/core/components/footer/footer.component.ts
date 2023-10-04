import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today = new Date();
  constructor() { }

  ngOnInit() {
  }

  notificationsInformation() {
    let phoneBee = '+593981013666';
    let message = `¡Hola!, necesito información `;
    let urlWapp = `https://wa.me/${phoneBee}?text=${message}`;
    window.open(urlWapp, "_blank");
  }


}
