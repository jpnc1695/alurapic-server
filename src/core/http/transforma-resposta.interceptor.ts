import { NestResponse } from 'src/core/http/nest-response';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class TransformaRespostaInterceptor implements NestInterceptor{

  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost:HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter
  }
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle()
               .pipe(
                  map((respostaDoControlador:NestResponse)=>{
                      if(respostaDoControlador instanceof NestResponse){
                          const contexto = context.switchToHttp();
                          const response = contexto.getResponse();
                          const{header, status, body} = respostaDoControlador;

                          const nomesDosCabecalhos = Object.getOwnPropertyNames(header)

                          nomesDosCabecalhos.forEach(nomeDoCabecalho => {
                               const valorDoCabecalho = header[nomeDoCabecalho];
                               this.httpAdapter.setHeader(response, nomeDoCabecalho, valorDoCabecalho)
                          });

                          this.httpAdapter.status(response, status)
                          return body;
                      }

                      return respostaDoControlador;
                  })
               )
  }

}