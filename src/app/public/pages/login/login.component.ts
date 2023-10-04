import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { notification, notificationLogin, SWEET_TYPE_BUTTON, SWEET_TYPE_ICON, SWEET_TYPE_TITLE } from "src/app/shared/notifications/swal-alert";
import { noWhitespaceValidator } from "src/app/shared/validations/validations";
import { AuthService } from "../../core/services/auth.service";
// import { CreateAccountComponent } from '../../modals/createAccount/createAccount.component';
// import { ForgotPasswordComponent } from '../../modals/forgotPassword/forgotPassword.component';
import { finishLoading, startLoading } from "src/app/shared/loading/loader";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
    private _api: AuthService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm(){
    this.form = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public login(){
    if (this.form.invalid) {
      return;
    }
  
    this._api.login(this.form.value).subscribe((data: any) => {
    
      if (data.status === 201) {
        localStorage.setItem('tokenP', data.body.token);
        localStorage.setItem('userP', JSON.stringify(data.body.user));
        this.router.navigate(['/product']);
      }
    }, error => {
      console.log(error);
    });
  }
  
  logout() {
    startLoading();
    this._api.logout()
      .subscribe({
        next: (resp: any) => {
          if (resp.status === 200) {
            localStorage.removeItem('token-client-home');
            localStorage.removeItem('idClient');
            localStorage.removeItem('client');
            localStorage.removeItem('_grecaptcha');

            notification(SWEET_TYPE_ICON.SUCCESS, SWEET_TYPE_TITLE.SUCCESS, 'Sesión finalizada correctamente', SWEET_TYPE_BUTTON.SUCCESS);

            this.router.navigate(['/product']).then(() => {
              window.location.reload();
            });
          }
        },
        complete: () => {
          finishLoading();
        },
        error: (error) => {
          finishLoading();
          notification(SWEET_TYPE_ICON.ERROR, SWEET_TYPE_TITLE.ERROR, 'Algo ha salido mal intenta de nuevo mas tarde!', SWEET_TYPE_BUTTON.ERROR);
        }
      });
  }

  
  // createAccount() {
  //   this.dialog.open(CreateAccountComponent, { width: '70%' })
  // }

  // forgotPassword() {
  //   this.dialog.open(ForgotPasswordComponent, { width: '50%' })
  // }


}
