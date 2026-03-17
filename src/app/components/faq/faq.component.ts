import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definiáljuk a kérdés-válasz struktúráját
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  activeFaqId: string | null = null;


  faqs: FaqItem[] = [
    {
      id: 'faq1',
      question: 'Milyen típusú ablakokat és ajtókat javít?',
      answer: 'Főként műanyag (PVC) és modern fa nyílászárók szervizelésével foglalkozom. Régi, kapcsolt gerébtokos ablakok asztalos munkáit nem vállalom.'
    },
    {
      id: 'faq2',
      question: 'Mennyi időt vesz igénybe egy javítás?',
      answer: 'A legtöbb probléma (beállítás, vasalat olajozás, kisebb zárcsere) a helyszínen 30-60 perc alatt megoldható. Speciális alkatrész rendelése esetén ez több nap is lehet.'
    },
    {
      id: 'faq3',
      question: 'Mikor érdemes a gumitömítést cserélni?',
      answer: 'Ha az ablak zárt állapotában is behúz a hideg, behallatszik az utcai zaj, vagy ha a gumi szemmel láthatóan megkeményedett, berepedezett, illetve kilapult.'
    }
  ];

  toggleFaq(id: string) {
    this.activeFaqId = this.activeFaqId === id ? null : id;
  }
}