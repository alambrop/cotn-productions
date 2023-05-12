import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit{

  isAuthenticated$ = this.auth.isAuthenticated$
  constructor(private router: Router, private auth: AuthService, @Inject(DOCUMENT) private doc: Document) {
    
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
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
   
  }

}
