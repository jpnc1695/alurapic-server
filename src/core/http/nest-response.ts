
export class NestResponse {
  status: number;
  header:object;
  body:object;

  constructor(resposta:NestResponse){
    Object.assign(this, resposta)
  }
   
}