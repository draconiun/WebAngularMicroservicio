import { Component } from '@angular/core';
import { Factura } from './factura.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { enviroment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appClient';

  facturas: Factura[] = [];

  constructor(private http: HttpClient) {
  }

  listar(){
    let headersGet = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZiODVjNGJkODZhYjIyOGVmMWEyYmExODU1NjA5YTM4IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NzQwMzg3MTEsImV4cCI6MTU3NDA0MjMxMSwiaXNzIjoiaHR0cDovL2FwaXNlZ3VyaWRhZGdhbGF4eTo4MDgwIiwiYXVkIjpbImh0dHA6Ly9hcGlzZWd1cmlkYWRnYWxheHk6ODA4MC9yZXNvdXJjZXMiLCJhcGlmYWN0dXJhIiwiYXBpaGlzdG9yaWNvIiwiYXBpc2VuZGVyIl0sImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzdWIiOiIxIiwiYXV0aF90aW1lIjoxNTc0MDM4NzExLCJpZHAiOiJsb2NhbCIsInNjb3BlIjpbImFwaWZhY3R1cmEiLCJhcGloaXN0b3JpY28iLCJhcGlzZW5kZXIiXSwiYW1yIjpbInB3ZCJdfQ.crsKD_zff6UFNRs5rHpZQiFBf6z3w6Ikc3v5eJfGVT4FzAuGRYO-ySmnHvB9r0ZQvWjv9O1II_hfkt68QeUFXMNM93Egzy4bwTib6Mtk51Nc3yWZOF6lrdnMcQ9RgOHxOpJaQdv_JM1Npp2HQiQlyqvBWtE_n_H7qNxN2HTUi4IF6C5mn-lxcS346JJ8iIGsG3jpXbCKLpEQ1n8JwQSh2F5ER0zTBXcmbg-HacHLp0JZ2-H9aREttmkhdqqoZPF483yuDUrUGopBQcWL1V-gN029dVM-BEflHWOc5Ykv7MALiILIgKhI2hDig5Vf0Uii1DqrY1WwwU5TZmIO2iw6QQ"
    }); 
    // headersGet.set("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZiODVjNGJkODZhYjIyOGVmMWEyYmExODU1NjA5YTM4IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NzQwMzg3MTEsImV4cCI6MTU3NDA0MjMxMSwiaXNzIjoiaHR0cDovL2FwaXNlZ3VyaWRhZGdhbGF4eTo4MDgwIiwiYXVkIjpbImh0dHA6Ly9hcGlzZWd1cmlkYWRnYWxheHk6ODA4MC9yZXNvdXJjZXMiLCJhcGlmYWN0dXJhIiwiYXBpaGlzdG9yaWNvIiwiYXBpc2VuZGVyIl0sImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzdWIiOiIxIiwiYXV0aF90aW1lIjoxNTc0MDM4NzExLCJpZHAiOiJsb2NhbCIsInNjb3BlIjpbImFwaWZhY3R1cmEiLCJhcGloaXN0b3JpY28iLCJhcGlzZW5kZXIiXSwiYW1yIjpbInB3ZCJdfQ.crsKD_zff6UFNRs5rHpZQiFBf6z3w6Ikc3v5eJfGVT4FzAuGRYO-ySmnHvB9r0ZQvWjv9O1II_hfkt68QeUFXMNM93Egzy4bwTib6Mtk51Nc3yWZOF6lrdnMcQ9RgOHxOpJaQdv_JM1Npp2HQiQlyqvBWtE_n_H7qNxN2HTUi4IF6C5mn-lxcS346JJ8iIGsG3jpXbCKLpEQ1n8JwQSh2F5ER0zTBXcmbg-HacHLp0JZ2-H9aREttmkhdqqoZPF483yuDUrUGopBQcWL1V-gN029dVM-BEflHWOc5Ykv7MALiILIgKhI2hDig5Vf0Uii1DqrY1WwwU5TZmIO2iw6QQ")
    var lista = this.http.get<Factura[]>("https://apigalaxyayma.azure-api.net/factura/api/factura", { headers : headersGet }).subscribe(
      (response) => {
      this.facturas = response;
      console.log("FACTURAS -> ", response);
      },
      (error) => {

      }
    );
  }
}
