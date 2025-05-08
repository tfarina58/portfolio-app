import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { IntroComponent } from "./components/intro/intro.component";
import { InformationComponent } from "./components/information/information.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { OutroComponent } from "./components/outro/outro.component";
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, ContactMeComponent, IntroComponent, InformationComponent, ProjectsComponent, OutroComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title: string = 'portfolio-app';
  
  overHorizontalScrollZone: boolean = true;
  underHorizontalScrollZone: boolean = false;
  insideHorizontalScrollZone: boolean = false;

  totalWidth: number = 0; // In vw units
  offsetWidth: number = 0; // In vw units

  constructor() {}

  ngOnInit(): void {
    let body: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName('body');
    if (body == undefined || body.length == 0) return;

    this.totalWidth = body.item(0)!.scrollWidth / window.innerWidth * 100;
    this.offsetWidth = (body.item(0)!.scrollWidth - window.innerWidth) / window.innerWidth * 100;

    const element = document.getElementById("timeline");
    if (element == undefined) return;

    window.addEventListener("wheel", (event) => {
      event.preventDefault();
      let alreadyCalledScrollTo: boolean = false;

      if (this.overHorizontalScrollZone) {
        // Reaching element from top
        if (window.scrollY + event.deltaY >= element.offsetTop) {
            
          this.overHorizontalScrollZone = false;
          this.insideHorizontalScrollZone = true;
          alreadyCalledScrollTo = true;

          window.scrollTo({left: 1, top: element.offsetTop, behavior: 'instant'});
        }
      } else if (this.insideHorizontalScrollZone) {
        // Leaving element to go top
        if (window.scrollX + event.deltaY <= 0) {

          this.insideHorizontalScrollZone = false;
          this.overHorizontalScrollZone = true;

          window.scrollTo({left: 0, top: element.offsetTop, behavior: 'instant'});

        // Leaving element to go bottom
        } else if (window.scrollX + event.deltaY >= element.offsetWidth - window.innerWidth) {

          this.insideHorizontalScrollZone = false;
          this.underHorizontalScrollZone = true;

          window.scrollTo({left: element.offsetWidth - window.innerWidth, top: element.offsetTop, behavior: 'instant'});
        }
      } else if (this.underHorizontalScrollZone) {
        // Reaching element from bottom
        if (window.scrollY + element.offsetHeight + event.deltaY <= element.offsetTop + element.offsetHeight) {

          this.underHorizontalScrollZone = false;
          this.insideHorizontalScrollZone = true;
          alreadyCalledScrollTo = true;

          window.scrollTo({left: element.offsetWidth + element.offsetWidth - 1, top: element.offsetTop, behavior: 'instant'});
        }
      }

      if (this.insideHorizontalScrollZone && !alreadyCalledScrollTo)
        window.scrollTo({left: window.scrollX + event.deltaY, top: element.offsetTop, behavior: 'instant'});
      else
        window.scrollTo({left: window.scrollX, top: window.scrollY + event.deltaY, behavior: 'instant'});
    }, { passive: false });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }, 100);
  }

}
