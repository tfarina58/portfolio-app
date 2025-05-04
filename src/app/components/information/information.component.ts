import { Component } from '@angular/core';
import { InformationCard } from '../../interfaces/information-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information',
  imports: [CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent  {

  events: InformationCard[] = [
    {
      organization: 'University of Rijeka, Faculty of Engineering',
      date: {
        from: new Date(2016, 9),
        to: new Date(2020, 6)
      },
      position: 'Bachelor\'s degree in Computer Science',
      location: 'Rijeka, Croatia',
      descriptions: ['Obatined my Bachelor\'s degree in Computer Science', 'Final thesis: Speech synthesis created from previousrecordings.', 'Written in Python'],
      professional: false
    },
    {
      organization: 'Juice d.o.o.',
      date: {
        from: new Date(2021, 2),
        to: new Date(2023, 5)
      },
      position: 'Mobile developer',
      location: 'Rijeka, Croatia',
      descriptions: [
        'Engaged in client communication and presented innovative feature proposals',
        'Mentored junior developers during the onboarding process',
        'HTML, CSS, JS, TS, Angular, Node.js, MongoDB'
      ],
      professional: true
    },
    {
      organization: 'Rudan d.o.o.',
      date: {
        from: new Date(2023, 10),
        to: new Date(2024, 4)
      },
      position: 'Software developer',
      location: 'Žminj, Croatia',
      descriptions: [
        'Automated various tasks using Task Scheduler',
        'Developed user manuals, system documentation, and API references',
        'HTML, CSS, JS, TS, Angular, .NET, SQL Server'
      ],
      professional: true
    },
    {
      organization: 'University of Rijeka, Faculty of Engineering',
      date: {
        from: new Date(2020, 9),
        to: new Date(2024, 8)
      },
      position: 'Master\'s degree in Computer Science',
      location: 'Rijeka, Croatia',
      descriptions: ['Obatined my Master\'s degree in Computer Science', 'Final thesis: System for informing tourists through an Android TV application.', 'Written in Flutter, Dart, Android, Java, and Firebase'],
      professional: false
    },
    {
      organization: 'RIS d.o.o.',
      date: {
        from: new Date(2024, 11),
        to: new Date(2025, 3)
      },
      position: 'Software developer',
      location: 'Kastav, Croatia',
      descriptions: [
        'Wrote system documentations',
        'Conducted testing and validation ofsoftware functionalities',
        'HTML, CSS, JS, jQuery, PHP, Clarion'
      ],
      professional: true
    }
  ];

  constructor() {}
}
