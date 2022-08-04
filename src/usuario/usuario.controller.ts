import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Post, Param } from "@nestjs/common"

@Controller('users')
export class UsuarioController {
  
  constructor(private usuarioService:UsuarioService){}


  @Get(':nomeDeUsuairo')
  public buscaUsuarioPorNome(@Param('nomeDeUsuairo') nomeDeUsuario:string):Usuario{
    const usuarioAchado = this.usuarioService.buscaUsuarioPorNome(nomeDeUsuario)
    return usuarioAchado
  }

  @Post()
   public cria(@Body() usuario:Usuario):Usuario{
      const usuarioCriado =  this.usuarioService.cria(usuario)
      return usuarioCriado;
    }

}