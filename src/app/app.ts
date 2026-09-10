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
      <header class="site-header">
        <a class="brand-name" [routerLink]="['/']">
          <img class="brand-logo" src="/assets/consultant.png" alt="support" />
          <span class="brand-title">{{ title() }}</span>
        </a>
      </header>
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
