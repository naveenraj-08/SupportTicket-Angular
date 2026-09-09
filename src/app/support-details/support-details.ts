import { Component, inject} from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import { SupportTicketInfo } from '../support-ticket';
import { SupportTicket } from '../support-ticket/support-ticket';
import { SupportService } from '../support';

@Component({
  imports: [],
  selector: 'app-support-details',
  styleUrl: './support-details.css',
  //templateUrl: './support-details.html',
  template: `<p>Support details works! {{ ticketId }}</p>`,
})
export class SupportDetails {

  route: ActivatedRoute = inject(ActivatedRoute);
   ticketId = '';
   constructor() {
      this.ticketId = String(this.route.snapshot.params['ticketId']);
   }
}
