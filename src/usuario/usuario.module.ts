import { UsuarioController } from './usuario.controller';
import { Module } from "@nestjs/common";
import { UsuarioService } from './usuario.service';

@Module({
    controllers: [UsuarioController],
    providers:[UsuarioService]
})
export class usuarioModule {}