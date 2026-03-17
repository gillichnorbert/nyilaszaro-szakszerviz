import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  isModalOpen = false;
  isClosing = false; // Új változó a bezáró animációhoz

  openModal() {
    this.isModalOpen = true;
    this.isClosing = false;
    document.body.style.overflow = 'hidden'; 
  }

  closeModal() {
    this.isClosing = true; // Elindítjuk az animációt
    
    // Várjuk meg, amíg az animáció lefut (300ms), majd tüntessük el az ablakot
    setTimeout(() => {
      this.isModalOpen = false;
      this.isClosing = false;
      document.body.style.overflow = 'auto'; 
    }, 300);
  }
}