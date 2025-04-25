import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {environment} from '../environments/environments';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  title = 'angular-surveyjs';

  ngOnInit(): void {
    this.loadPayPalScript();
  }

  private loadPayPalScript(): void {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${environment.clientId}&currency=${environment.currency}`;
    script.async = true;
    document.head.appendChild(script);
  }

}
