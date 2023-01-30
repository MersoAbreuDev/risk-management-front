import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../interfaces/login-user';
import { catchError, Observable, throwError } from 'rxjs';
import { enviroments } from '../../enviroments/enviroment';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private utilsSerrvice: UtilsService
    ) { }

  loginUser(data: any):Observable<LoginUser>{
    return this.http.post<LoginUser>(enviroments.BASE_URL+'usuarios/login', data)
    .pipe(
      catchError((err)=>{
        if(err.status === 0 && err.status !== 404){
          this.utilsSerrvice.showError('Ocorreu um erro na aplicação, tente novamente!')
        }else if(err.status === 404){
          this.utilsSerrvice.showError(err.error.message)
        }else{
          this.utilsSerrvice.showError("Ocorreu um erro no servidor, tente mais tarde!")
        }
        return throwError(()=> err)
      })
    )
  }
}
