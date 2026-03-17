// src/app/app.component.ts
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServiceAreaComponent } from './components/service-area/service-area.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, AboutComponent, ServicesComponent, ProcessComponent,
    GalleryComponent, ServiceAreaComponent, WarrantyComponent, FaqComponent,
    ReviewsComponent, ContactComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nyillászáró Szakzervíz';
}