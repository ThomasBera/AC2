import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario';

  constructor(private http: HttpClient) {}

  // Método para obter todos os usuários
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obter um usuário específico por email e senha
  getUsuario(email: string, senha: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(usuarios => usuarios.find(usuario => usuario.email == email && usuario.senha == senha)),
      first()  // Pega apenas o primeiro resultado
    );
  }
}
