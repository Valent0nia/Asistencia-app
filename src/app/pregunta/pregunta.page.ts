import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertData} from '../../types' 
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})

export class PreguntaPage implements OnInit {

  public usuario = new User('', '', '', '', '');
  public respuesta:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router , private alertCtrl :AlertController){
    
    this.usuario = router.getCurrentNavigation().extras.state.user;
    this.alertCtrl=alertCtrl
}

ngOnInit(){}
async createAlert({head,subHead,msg,}:AlertData){
  return this.alertCtrl.create({header:head,subHeader:subHead,message:msg});
}

public async validarRespuestaSecreta(): Promise<void> {
  console.log(this.usuario)
  if (this.usuario.secretResponse === this.respuesta) {
    const alertInit = this.createAlert({head:'Recuperar contraseña',subHead:'',msg:`<h1>clave correcta la contraseña es : ${this.usuario.password}</h1> <img src=' https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-011.png'/>`})
    await (await alertInit).present();
    
  }
  else {
    const alertInit = this.createAlert({head:'Recuperar contraseña',subHead:'',msg:`<h1>¡Lo sentimos pero los datos ingresado no son correctos!</h1> <img src='https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-010.png'/>`})
    await (await alertInit).present();
  }

}
public inicioSesion(): void{
  this.router.navigate(['/login']);
}
// https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-010.png no
// https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-011.png si
}