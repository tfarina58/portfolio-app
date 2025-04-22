import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
