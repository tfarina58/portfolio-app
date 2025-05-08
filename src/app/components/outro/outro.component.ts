import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outro',
  imports: [CommonModule],
  templateUrl: './outro.component.html',
  styleUrl: './outro.component.scss'
})
export class OutroComponent {

  lastUpdated: Date = new Date(2025, 4, 6, 12, 27, 44);

  constructor() {}
}
