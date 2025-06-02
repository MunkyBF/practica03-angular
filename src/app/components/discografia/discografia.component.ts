import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-discografia',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './discografia.component.html',
  styleUrls: ['./discografia.component.css']
})
export class DiscografiaComponent {
  selectedAlbum: any = null;
  activeFilter: string = 'all';

  filters = [
    { value: 'all', label: 'Todos' },
    { value: '2010s', label: '2010-2015' },
    { value: '2015s', label: '2015-Presente' }
  ];

  platforms = [
    { name: 'Spotify', icon: 'spotify', link: 'https://open.spotify.com/artist/1Qp56T7n950O3EGMsSl81D' },
    { name: 'Apple Music', icon: 'music_note', link: 'https://music.apple.com/us/artist/ghost/420714973' },
    { name: 'YouTube', icon: 'play_circle', link: 'https://music.youtube.com/channel/UCa25JQ4XKbrpIq1sJ1TZ_lg' }
  ];

  albums = [
    {
      id: 1,
      title: 'Prequelle',
      year: 2018,
      type: 'Álbum de estudio',
      cover: 'https://m.media-amazon.com/images/I/91tzz17ZsJL.jpg',
      songs: [
        { title: 'Ashes', duration: '1:21' },
        { title: 'Rats', duration: '4:21' },
        { title: 'Faith', duration: '4:29' },
        { title: 'See the Light', duration: '4:05' },
        { title: 'Miasma', duration: '5:17' },
        { title: 'Dance Macabre', duration: '3:39' },
        { title: 'Pro Memoria', duration: '5:39' },
        { title: 'Witch Image', duration: '3:30' },
        { title: 'Helvetesfönster', duration: '5:55' },
        { title: 'Life Eternal', duration: '3:27' }
      ]
    },
    {
      id: 2,
      title: 'Meliora',
      year: 2015,
      type: 'Álbum de estudio',
      cover: 'https://m.media-amazon.com/images/I/81soeahkIbL._UF1000,1000_QL80_.jpg',
      songs: [
        { title: 'Spirit', duration: '5:15' },
        { title: 'From the Pinnacle to the Pit', duration: '4:03' },
        { title: 'Cirice', duration: '6:02' },
        { title: 'He Is', duration: '4:13' },
        { title: 'Mummy Dust', duration: '4:07' },
        { title: 'Majesty', duration: '5:24' },
        { title: 'Devil Church', duration: '1:06' },
        { title: 'Absolution', duration: '4:50' },
        { title: 'Deus in Absentia', duration: '5:37' }
      ]
    },
    {
      id: 3,
      title: 'Infestissumam',
      year: 2013,
      type: 'Álbum de estudio',
      cover: 'https://m.media-amazon.com/images/I/81JM2ijH7tL._UF1000,1000_QL80_.jpg',
      songs: [
        { title: 'Infestissumam', duration: '1:42' },
        { title: 'Per Aspera ad Inferi', duration: '4:09' },
        { title: 'Secular Haze', duration: '5:11' },
        { title: 'Jigolo Har Megiddo', duration: '3:58' },
        { title: 'Ghuleh / Zombie Queen', duration: '7:29' },
        { title: 'Year Zero', duration: '5:50' },
        { title: 'Body and Blood', duration: '3:43' },
        { title: 'Idolatrine', duration: '4:24' },
        { title: 'Depth of Satan\'s Eyes', duration: '5:25' },
        { title: 'Monstrance Clock', duration: '5:53' }
      ]
    },
    {
      id: 4,
      title: 'Opus Eponymous',
      year: 2010,
      type: 'Álbum de estudio',
      cover: 'https://m.media-amazon.com/images/I/91hckYbFtGL.jpg',
      songs: [
        { title: 'Deus Culpa', duration: '1:34' },
        { title: 'Con Clavi Con Dio', duration: '3:33' },
        { title: 'Ritual', duration: '4:28' },
        { title: 'Elizabeth', duration: '4:08' },
        { title: 'Stand by Him', duration: '3:56' },
        { title: 'Satan Prayer', duration: '4:38' },
        { title: 'Death Knell', duration: '4:36' },
        { title: 'Prime Mover', duration: '3:53' },
        { title: 'Genesis', duration: '4:03' }
      ]
    }
  ];

  get filteredAlbums() {
    if (this.activeFilter === 'all') return this.albums;
    if (this.activeFilter === '2010s') return this.albums.filter(a => a.year >= 2010 && a.year <= 2015);
    return this.albums.filter(a => a.year > 2015);
  }

  selectAlbum(album: any) {
    this.selectedAlbum = this.selectedAlbum?.id === album.id ? null : album;
    if (this.selectedAlbum) {
      setTimeout(() => {
        const element = document.querySelector('.album-detail');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  }

  filterAlbums(filter: string) {
    this.activeFilter = filter;
    this.selectedAlbum = null;
  }

  playOnPlatform(link: string) {
    window.open(link, '_blank');
  }
}