import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderElement } from '../../interfaces/header-button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() darkMode!: boolean;

  @Output() onClick = new EventEmitter<number>();

  elements: HeaderElement[] = [
    {
      title: "Information",
      height: "5vh",
      width: "5vw",
      backgroundColor: "#333366",
      border: "",
      scrollTo: undefined
    },
    {
      title: "Projects",
      height: "5vh",
      width: "5vw",
      backgroundColor: "#333366",
      border: "",
      scrollTo: undefined
    },
    {
      title: "Download CV",
      height: "5vh",
      width: "5vw",
      backgroundColor: "#333366",
      border: "",
      scrollTo: undefined
    },
    {
      title: "Contact me",
      height: "5vh",
      width: "5vw",
      backgroundColor: "#333366",
      border: "",
      scrollTo: undefined
    }
  ];

  ngOnInit(): void {}

  click(target: HeaderElement): void {
    if (target == undefined) return;

    if (target.title == "Download CV") this.downloadCV();
    else if (target.title == "Contact me") this.openContactDialog();
    else this.onClick.emit(target.scrollTo);
  }

  downloadCV(): void {

  }

  openContactDialog(): void {

  }
}