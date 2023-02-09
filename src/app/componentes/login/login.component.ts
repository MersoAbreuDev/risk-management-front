import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/interfaces/login-user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';
import { Subject, takeUntil } from 'rxjs';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder,
    private loginServiceApi: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private utilsService: UtilsService){}



  ngOnInit(){
    this.initForms();
     
  }

  initForms(){
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  getValueControl(form: FormGroup, control: string){
    return form.controls[control].value;
  }

  createdPayloadLogin(
    login = this.getValueControl(this.form,'login'),
    password = this.getValueControl(this.form, 'password')
  ){
    const payload = {
      login,
      password
    }
    return payload;
  }

  isValidForm(){
    return this.form.valid;
  }
  
  login(){
    if(this.isValidForm()){
      const {login} = this.createdPayloadLogin();
      this.loginServiceApi.loginUser(this.createdPayloadLogin())
      .subscribe((res: LoginUser)=>{
        let {token} = res;
        this.localStorageService.setLocalStorage('token', JSON.stringify(token))
        this.localStorageService.setLocalStorage('usuario', JSON.stringify(login))
        this.utilsService.showSuccess('Login efetuado com sucesso!')
        this.navigateURL('dashboard');
      })
    }
  }

  
  navigateURL(url: string){
    this.router.navigate([`/${url}`])
  }
  
}
