import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export enum Mode {
  Light,
  Dark,
}

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {
  
  endpoint!: string;
  mode!: Mode;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.mode = this.getMode();
  }

  getMode(): Mode {
    return this.mode;
  }

  setMode(mode: Mode): void {
    this.mode = mode;
  }

  downloadCV(): Observable<string> {
    return this.http.get(this.endpoint, {responseType: 'text'});
  }
}
