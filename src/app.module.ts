import { usuarioModule } from './usuario/usuario.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './common/filtro/filtro-de-excecao-http.filter';


@Module({
  imports: [usuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp
    },
     {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
     }   
  ],
})
export class AppModule {}