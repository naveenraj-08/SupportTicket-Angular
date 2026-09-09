import { Component, inject} from '@angular/core';
import { SupportTicketInfo } from '../support-ticket';
import { SupportTicket } from '../support-ticket/support-ticket';
import { SupportService } from '../support';

@Component({
  imports: [SupportTicket],
  selector: 'app-support-component',
  styleUrl: './support-component.css',
  templateUrl: './support-component.html',
})
export class SupportComponent {


  supportTicketList: SupportTicketInfo[] = [];

  supportService: SupportService = inject(SupportService); 

  constructor() {
    this.supportTicketList = this.supportService.getAllSupportTickets();
  }
}
