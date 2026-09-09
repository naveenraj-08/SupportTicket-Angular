import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {SupportComponent} from './support-component/support-component'

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  //templateUrl: './app.html',
  //template:`<h1>Hello, {{ title() }}</h1>
    //  <p>Congratulations! Your app is running. 🎉</p>
      //<section>
       // <app-support-component></app-support-component>
    //  </section>
   // `,

  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
})

// <section class="results">
   //   <app-ticket-component [supportTicket]="supportTicket" />
    //</section>

export class App {
  protected readonly title = signal('SupportTicket World');

}
