import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

cadastrar(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('https://laossepgolb.herokuapp.com/usuarios/cadastrar', usuario)
}

entrar(usuariologin: UsuarioLogin): Observable<UsuarioLogin>{
  return this.http.post<UsuarioLogin>('https://laossepgolb.herokuapp.com/usuarios/logar', usuariologin)
}

}
