import { Component , ViewChild, ElementRef} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  @ViewChild('nextElement', { static: true }) nextElementRef: ElementRef<HTMLElement>;

  constructor(private auth: AuthService) {}

  public currentImage = 0;
  public slideInterval = 10000;

  images = [
    {
      imageSrc: 'assets/cotnhome.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/hogwarts.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/cars.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/cybercity.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/godwoken.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/keegan.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/me2ending.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/normandy.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/saturn.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/sea.png',
      imageAlt: ''
    },
    {
      imageSrc: 'assets/torrent.png',
      imageAlt: ''
    },

  ]

  ngOnInit(): void {
    this.autoSlideImages()
  }

  scrollToNextElement() {
    this.nextElementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  autoSlideImages(): void  {
    setInterval(()=> {
      this.nextImage();
    }, this.slideInterval )
  }

  selectImage(i: number) {
    this.currentImage = i;
  }

  nextImage() {
    this.currentImage += 1;

    if (this.currentImage >= this.images.length - 1) {
      this.currentImage = 0;
    }
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/games',
      },
    });
   
  }

  signup(): void {
    this.auth.loginWithRedirect({ 
      appState: {
        target: '/games',
      },
      authorizationParams: {
        screen_hint: 'signup',
      }}
    );
    
  }

  logout(): void {
    this.auth.logout();
   
  }
}
