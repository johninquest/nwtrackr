import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private _auth0Service: AuthService) { }

  onClickGoogleAuth() {
    console.log('Tapped Google auth');
    alert('Under construction');
  }

  onClickFacebookAuth() {
    console.log('Tapped Facebook auth');
  }

  onClickEmailAuth() {
    console.log('Tapped Email auth');
    /*  this._router.navigateByUrl('/auth/email'); */
    alert('Under construction');
  }

  onClickAuth0() {
    this._auth0Service.loginWithRedirect();
  }
}
