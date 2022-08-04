import { usuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [usuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}