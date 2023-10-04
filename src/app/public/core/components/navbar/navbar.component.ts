import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { CreateAccountComponent } from 'src/app/public/modals/createAccount/createAccount.component';
import { AuthService } from '../../services/auth.service';
import { finishLoading, startLoading } from 'src/app/shared/loading/loader';
import { SWEET_TYPE_BUTTON, SWEET_TYPE_ICON, SWEET_TYPE_TITLE, notification } from 'src/app/shared/notifications/swal-alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  autoclose = false;

  name: string = '' || '';

  constructor(
    public dialog: MatDialog,
    private _apiAuth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    let customer = JSON.parse(localStorage?.getItem('client'))
    this.name = customer?.name || '';
    // this.name = JSON.parse(localStorage?.getItem('client'))['name'] || '';
  }

  logout() {
    startLoading();
    this._apiAuth.logout()
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

          if (error.error.statusMessage === 'Session not found') {
            notification(SWEET_TYPE_ICON.SUCCESS, SWEET_TYPE_TITLE.SUCCESS, 'Sesión finalizada correctamente', SWEET_TYPE_BUTTON.SUCCESS);
            this.router.navigateByUrl('/login');
            localStorage.clear();
            return
          }

          notification(SWEET_TYPE_ICON.ERROR, SWEET_TYPE_TITLE.ERROR, 'Algo ha salido mal intenta de nuevo mas tarde!', SWEET_TYPE_BUTTON.ERROR);
        }
      });
  }

  // createAccount() {
  //   this.dialog.open(CreateAccountComponent, { width: '70%' })
  // }

  get user() {
    return localStorage.getItem('client');
  }

  get tokenClient(): string {
    return localStorage.getItem('token-client-home')
  }

}
