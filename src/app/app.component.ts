import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = '../assets/imagenes/dado1.png';
  dadoDerecha = '../assets/imagenes/dado6.png';
  numero1 = 0;
  numero2 = 1;

  tirarDados():void{
    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;
    this.dadoIzquierda = '../assets/imagenes/dado' + this.numero1 + '.png'
    this.dadoDerecha = '../assets/imagenes/dado' + this.numero2 + '.png'
  }

}
