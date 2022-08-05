import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {
  id:number;

  @Expose({name:'username'})
  @IsNomeDeUsuarioUnico({message: 'Nome de usuario deve ser único'})
  @IsNotEmpty({message:'O campo nomeDeUsuario é obrigatorio'})
  @IsString({message: 'Apenas strings são permitidas'})
  nomeDeUsuairo:string;

  @IsEmail({message:'Formato de email email@email.com'})
  email:string;
  
  @Expose({name: 'password'})
  @Exclude({toPlainOnly:true})
  @IsNotEmpty({message:'O campo senha é obrigatorio'})
  senha:string;

  @Expose({name:'name'})
  @IsNotEmpty({message:'O campo nomeCompleto é obrigatorio'})
  nomeCompleto:string;

  @Expose({name:'joindate'})
  dataDeEntrada:Date;
}