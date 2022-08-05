import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
  id:number;

  @IsNotEmpty({message:'O campo nomeDeUsuario é obrigatorio'})
  @IsString({message: 'Apenas strings são permitidas'})
  nomeDeUsuairo:string;

  @IsEmail({message:'Formato de email email@email.com'})
  email:string;

  @IsNotEmpty({message:'O campo senha é obrigatorio'})
  senha:string;

  @IsNotEmpty({message:'O campo nomeCompleto é obrigatorio'})
  nomeCompleto:string;
  dataDeEntrada:Date;
}