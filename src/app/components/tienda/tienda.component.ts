import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  products = [
    { name: 'Camiseta', price: 25, image: 'assets/tshirt.jpg' },
    { name: 'Gorra', price: 15, image: 'assets/cap.jpg' },
    { name: 'Poster', price: 10, image: 'assets/poster.jpg' },
    { name: 'Vinilo', price: 30, image: 'assets/vinyl.jpg' }
  ];
}