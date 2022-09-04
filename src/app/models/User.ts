export class User {
  public email = '';
  public password = '';
  public name = '';
  public secretAnswer = '';
  public secretResponse = '';

  constructor(
    email: string,
    password: string,
    nombre: string,
    secretAnswer: string,
    secretResponse: string
  ) {
    this.email = email;
    this.password = password;
    this.name = nombre;
    this.secretAnswer = secretAnswer;
    this.secretResponse = secretResponse;
  }

  public listaUsuariosValidos(): User[] {
    const lista = [];
    lista.push(
      new User(
        'atorres@duocuc.cl',
        '1234',
        'Ana Torres Leiva',
        '¿nombre de su mascota?',
        'gato'
      )
    );
    lista.push(
      new User(
        'avalenzuela@duocuc.cl',
        'qwer',
        'Alberto Valenzuela Nuñez',
        '¿nombre de su mejor amigo?',
        'juanito'
      )
    );
    lista.push(
      new User(
        'cfuentes@duocuc.cl',
        'asdf',
        'Carla Fuentes Gonzalez',
        '¿Lugar de nacimiento de su madre?',
        'Valparaiso'
      )
    );
    return lista;
  }

  public buscarUsuarioValido(email: string, password: string): User {
    return this.listaUsuariosValidos().find(
      (usu) => usu.email === email && usu.password === password
    );
  }

  public validateEmail(): string {
    if (this.email.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }
    if (this.email.length < 3 || this.email.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    for (let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length !== 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }

  public validarUser(): string {
    return this.validateEmail() || this.validarPassword();
  }
}
