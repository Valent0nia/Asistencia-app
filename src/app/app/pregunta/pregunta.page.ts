import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})

export class PreguntaPage implements OnInit {

  public usuario: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router){
    
  

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        this.router.navigate(['/login']);
      }
    }); 
}

ngOnInit(){}
validarPreguntaCorrecta() {

}
public ingresarPaginaValidarRespuestaSecreta() : void {

}
}