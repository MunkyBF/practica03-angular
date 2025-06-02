// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../app/src/components/toolbar/toolbar.component'; // Verifica esta ruta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet], // Asegúrate de incluir ToolbarComponent aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' // Cambiado a .css (ver siguiente error)
})
export class AppComponent {
  title = 'vistas';
}