import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService, Mode } from '../../services/common.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() onClick = new EventEmitter<number>();

  darkMode!: Mode;
  contactOpened: boolean = false;

  constructor(private service: CommonService) {}

  ngOnInit(): void {
    this.darkMode = this.service.getMode();
  }

  downloadCV(): void {
    /*this.service.downloadCV().subscribe({
      next: (response: string) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Error fetching string:', error);
      }
    });*/
  }

  openContactDialog(): void {
    this.contactOpened = true;
  }
}