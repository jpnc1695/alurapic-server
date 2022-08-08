import { NestResponseBuilder } from './../core/http/nest-response-builder';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Post, Param,HttpStatus, NotFoundException } from "@nestjs/common"
import { NestResponse } from '../core/http/nest-response';

@Controller('users')
export class UsuarioController {
  
  constructor(private usuarioService:UsuarioService){}


  @Get(':nomeDeUsuairo')
  public buscaUsuarioPorNome(@Param('nomeDeUsuairo') nomeDeUsuario:string):Usuario{
    const usuarioAchado = this.usuarioService.buscaUsuarioPorNome(nomeDeUsuario)
      if(!usuarioAchado){
        throw new NotFoundException({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Usuario não encontrado !'
        })
      }
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