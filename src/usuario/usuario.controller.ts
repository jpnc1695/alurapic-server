import { NestResponseBuilder } from './../core/http/nest-response-builder';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Post, Param,HttpStatus } from "@nestjs/common"
import { NestResponse } from 'src/core/http/nest-response';

@Controller('users')
export class UsuarioController {
  
  constructor(private usuarioService:UsuarioService){}


  @Get(':nomeDeUsuairo')
  public buscaUsuarioPorNome(@Param('nomeDeUsuairo') nomeDeUsuario:string):Usuario{
    const usuarioAchado = this.usuarioService.buscaUsuarioPorNome(nomeDeUsuario)
    return usuarioAchado
  }

  @Post()
   public cria(@Body() usuario:Usuario):NestResponse {
      const usuarioCriado =  this.usuarioService.cria(usuario);
      return  new NestResponseBuilder()
                  .comStatus(HttpStatus.CREATED)
                  .comHeaders({
                    'Location': `/users/${usuarioCriado.nomeDeUsuairo}` 
                  })
                  .comBody(usuarioCriado)
                  .build();
     /*  res.status(HttpStatus.CREATED)
          .location(`/users/${usuarioCriado.nomeDeUsuairo}`)
          .json(usuarioCriado);  */
    }

}