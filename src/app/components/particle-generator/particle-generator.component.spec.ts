import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleGeneratorComponent } from './particle-generator.component';

describe('ParticleGeneratorComponent', () => {
  let component: ParticleGeneratorComponent;
  let fixture: ComponentFixture<ParticleGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticleGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
