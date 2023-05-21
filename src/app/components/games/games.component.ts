import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  user$ = this.authService.user$;
  code$ = this.user$.pipe(map((user: any) => JSON.stringify(user, null, 2)));

  gamesList = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {

    let user
    this.user$.subscribe((data) => {
      user = data;
    })

    let code;
    this.code$.subscribe((data2) => {
      code = data2;
    })
  }

}