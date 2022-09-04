import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  public user: User;

  constructor(
    private router: Router,
    private toastControler: ToastController,
    private animationCtrl: AnimationController
  ) {
    this.user = new User('', '', '', '', '');
    this.user.email = '';
    this.user.password = '';
    this.animationCtrl = animationCtrl;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    const imgAnimation = this.animationCtrl
      .create()
      .addElement(document.getElementById('image-aim'))
      .duration(2000)
      .beforeStyles({
        opacity: 0.2,
      })
      .afterClearStyles(['opacity'])
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    imgAnimation.play();
  }

  public ingressToApp(): void {
    if (!this.validateUser(this.user)) {
      return;
    }
    this.showMessage('¡Bienvenido!');

    console.log(this.user);
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
      },
    };
    this.router.navigate(['home'], navigationExtras);
  }

  public validateUser(user: User): boolean {
    const userFound = this.user.buscarUsuarioValido(user.email, user.password);
    if (userFound) {
      this.user = userFound;
      return true;
    } else {
      return false;
    }
  }
  async showMessage(message: string, duration?: number) {
    const toast = await this.toastControler.create({
      message,
      duration: duration ? duration : 2000,
    });
    toast.present();
  }
}
