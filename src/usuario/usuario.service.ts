import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {

  private usuarios = [
    {
      "id": 1,
      "nomeDeUsuairo": "zizou",
      "email": "email@email.com",
      "senha": "123456",
      "nomeCompleto": "Zinedine Zidane",
      "dataDeEntrada": new Date()
    }
  ]

  public buscaUsuarioPorNome(nomeDeUsuario:string):Usuario{
    return this.usuarios.find(usuario => usuario.nomeDeUsuairo == nomeDeUsuario)

  }

   public cria(usuario:Usuario):Usuario {
       this.usuarios.push(usuario);
       return usuario;
  }

}