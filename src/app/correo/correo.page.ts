import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router}from '@angular/router';
import {  User }from '../models/User';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo :string= '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public ingresarPaginaValidarRespuestaSecreta():void{
    const usuario=new User('','','','','');
    const usuarioEncontrado=usuario.buscarUsuarioPorCorreo(this.correo);
    if(!usuarioEncontrado){
      alert('EL CORREO NO EXISTE DENTRO DE LAS CUENTRAS VALIDAS DEL SISTEMA'); 
    }
    else{
    const navigationExtras: NavigationExtras = {
      state: {
        user: usuarioEncontrado
      },
    };
    this.router.navigate(['/pregunta'], navigationExtras);
  }
    }
    public inicioSesion(): void{
      this.router.navigate(['/login']);
    }

  }


