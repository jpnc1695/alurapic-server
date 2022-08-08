import { NestResponse } from './nest-response';
export class NestResponseBuilder {
  private resposta:NestResponse ={
    status:200,
    header:{},
    body:{}
  };

  public comStatus(status:number){
    this.resposta.status= status
    return this;
  }

  public comHeaders(headers: object){
    this.resposta.header = headers
    return this
  }

  public comBody(body:object){
    this.resposta.body = body
    return this
  }

  public build(){
    return new NestResponse(this.resposta)
  }
  
}