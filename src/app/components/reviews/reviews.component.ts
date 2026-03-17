import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  // Ezzel fogjuk meg a HTML-ben lévő konténert
  @ViewChild('widgetContainer', { static: true }) widgetContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Létrehozunk egy script taget
    const script = this.renderer.createElement('script');
    
    // IDE MÁSOLD BE A TRUSTINDEX/ELFSIGHT ÁLTAL ADOTT URL-T!
    // Példa: ''https://cdn.trustindex.io/loader.js?e97280e668c7995c49066518afb''
    script.src = 'https://cdn.trustindex.io/loader.js?e97280e668c7995c49066518afb'; 
    script.defer = true;
    script.async = true;

    // Hozzáadjuk a scriptet a konténerünkhöz
    this.renderer.appendChild(this.widgetContainer.nativeElement, script);
  }
}