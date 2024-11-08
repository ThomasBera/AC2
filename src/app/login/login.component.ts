import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service'; // Importar o serviço

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensagemErro: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLogin() {
    // Chama o método getUsuario do serviço para verificar as credenciais
    this.usuarioService.getUsuario(this.email, this.password).subscribe(usuario => {
      if (usuario) {
        // Se o login for bem-sucedido, redireciona para a tela principal
        this.router.navigate(['/principal']);
      } else {
        // Caso contrário, exibe a mensagem de erro
        this.mensagemErro = 'E-mail ou senha inválido!';
      }
    });
  }
}
