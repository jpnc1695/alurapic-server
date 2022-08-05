import { usuarioModule } from './usuario/usuario.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [usuarioModule],
  controllers: [],
  providers: [
     {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
     }   
  ],
})
export class AppModule {}