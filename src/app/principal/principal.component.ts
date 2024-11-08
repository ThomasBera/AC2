import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  usuarios: any[] = [];
  filtroNome: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  // Método para filtrar os usuários pelo nome
  filtrarUsuarios() {
    return this.usuarios.filter(usuario => 
      usuario.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
    );
  }
}

