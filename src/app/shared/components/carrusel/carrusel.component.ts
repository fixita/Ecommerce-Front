import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements AfterViewInit, OnDestroy {
  currentIndex: number = 0; // Índice de la imagen actual
  images: string[] = [
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg',
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg',
  ]; // Lista de imágenes
  intervalId: any; // Almacena el id del intervalo para poder cancelarlo después

  ngAfterViewInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    // Limpia el intervalo cuando el componente se destruye para evitar problemas de memoria
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    // Cambia al siguiente slide automáticamente cada 3 segundos
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Cambia al siguiente índice
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; // Cambia al índice anterior
  }
}
