import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';


@Component({
  selector: 'app-particle-generator',
  templateUrl: './particle-generator.component.html',
  styleUrls: ['./particle-generator.component.scss'],
 
})
export class ParticleGeneratorComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef!: ElementRef;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  particles: Particle[] = [];


  ngOnInit(): void {
   
    window.onload = () => {
      this.canvas = this.canvasRef.nativeElement;
      this.canvas.width = this.canvas.offsetWidth
      this.canvas.height = this.canvas.offsetHeight;
      
      const ctx = this.canvas.getContext('2d');

      // Do something with the context
      if (ctx) {
        this.ctx = ctx;
          
        // Create some particles
        for (let i = 0; i < 100; i++) {
          const particle = new Particle(this.canvas.width, this.canvas.height);
          this.particles.push(particle);
        }

        // Start animating the particles
        this.animateParticles();

      }      
    };
  }

  animateParticles(): void {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw each particle
    for (const particle of this.particles) {
      particle.update();
      particle.draw(this.ctx);
    }

    // Request the next animation frame
    requestAnimationFrame(() => this.animateParticles());
  }

}


class Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3;
    this.speed = Math.random();
    this.opacity = Math.random() * 0.5 + 0.5;
    this.canvasHeight = canvasHeight;
  }

  update(): void {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = this.canvasHeight;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
