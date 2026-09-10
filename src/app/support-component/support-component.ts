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

  filteredSupportTicketList: SupportTicketInfo[] = [];


  supportService: SupportService = inject(SupportService); 

  constructor() {
    this.supportTicketList = this.supportService.getAllSupportTickets();

    this.filteredSupportTicketList = this.supportTicketList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredSupportTicketList = this.supportTicketList;
      return;
    }
    this.filteredSupportTicketList = this.supportTicketList.filter((supportTicket) =>
      supportTicket?.ticketId.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
