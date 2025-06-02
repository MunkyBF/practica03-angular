import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-discografia',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatDividerModule],
  templateUrl: './discografia.component.html',
})
export class DiscografiaComponent {
albums = [
  { title: 'Prequelle', year: 2018, cover: 'https://m.media-amazon.com/images/I/91tzz17ZsJL.jpg' },
  { title: 'Meliora', year: 2015, cover: 'https://m.media-amazon.com/images/I/81soeahkIbL._UF1000,1000_QL80_.jpg' },
  { title: 'Infestissumam', year: 2013, cover: 'https://m.media-amazon.com/images/I/81JM2ijH7tL._UF1000,1000_QL80_.jpg' },
  { title: 'Opus Eponymous', year: 2010, cover: 'https://m.media-amazon.com/images/I/91hckYbFtGL.jpg' }
];


}
