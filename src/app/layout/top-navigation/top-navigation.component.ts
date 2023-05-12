import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit{

 
  constructor(private router: Router, public auth: AuthService) {
    
  }

  public ngOnInit(): void {
  
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
   
  }

  signup(): void {
    this.auth.loginWithRedirect({ 
      authorizationParams: {
        screen_hint: 'signup',
      }}
    );
    
  }

  logout(): void {
    this.auth.logout();
   
  }

}
