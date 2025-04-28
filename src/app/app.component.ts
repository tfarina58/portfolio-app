import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { IntroComponent } from "./components/intro/intro.component";
import { InformationComponent } from "./components/information/information.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { OutroComponent } from "./components/outro/outro.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, ContactMeComponent, IntroComponent, InformationComponent, ProjectsComponent, OutroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';

  scrollTo(target: number): void {
    console.log('Target: ', target);
    // window.scrollTo(0, target);
  }
}
