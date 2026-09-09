import { Component, input } from '@angular/core';
import { SupportTicketInfo } from '../support-ticket';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-support-ticket',
  styleUrl: './support-ticket.css',
  templateUrl: './support-ticket.html',
})
export class SupportTicket {

  supportTicket = input.required<SupportTicketInfo>();
}
