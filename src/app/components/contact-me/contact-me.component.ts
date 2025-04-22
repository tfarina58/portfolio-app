import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  @Input() darkMode!: boolean;
  
  @Output() onClick = new EventEmitter<number>();

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  focusedInput: "name" | "email" | "message" | "" = ""; 

  onSubmit(): void {
    if (this.contactForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log(this.contactForm.controls['name'])
  }

  setFocus(input?: "name" | "email" | "message" | ""): void {
    if (input == undefined) input = "";

    this.focusedInput = input!;

    console.log(this.focusedInput);
  }
}
