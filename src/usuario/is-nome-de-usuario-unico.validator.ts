import { UsuarioService } from './usuario.service';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class isNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {
  constructor(private usuarioService:UsuarioService){}
  validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
      return  !!!this.usuarioService.buscaUsuarioPorNome(nomeDeUsuario)
  }
}
 
export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: isNomeDeUsuarioUnicoConstraint,
    });
  };
}