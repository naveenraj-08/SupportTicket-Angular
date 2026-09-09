import { Service } from '@angular/core';
import { SupportTicketInfo } from './support-ticket';

@Service()
export class SupportService {

    supportTicketList: SupportTicketInfo[] = [
        {
          ticketId: 'S1001',
          traceId: 'Sup-123456787',
          customerId: '121',
          customerName: 'Tester One',
          subject: 'Password Reset',
          description: 'Old Pwd not working',
          channel: 'CHAT', // EMAIL, CHAT, PHONE, WEB_FORM
          createdAt: '2026-09-08',  
        },
        {
          ticketId: 'S1002',
          traceId: 'Sup-123456788',
          customerId: '122',
          customerName: 'Tester Two',
          subject: 'Password Reset',
          description: 'Old Pwd not working',
          channel: 'PHONE', // EMAIL, CHAT, PHONE, WEB_FORM
          createdAt: '2026-09-08',  
        },
        {
          ticketId: 'S1003',
          traceId: 'Sup-123456789',
          customerId: '123',
          customerName: 'Tester Three',
          subject: 'Password Reset',
          description: 'Old Pwd not working',
          channel: 'EMAIL', // EMAIL, CHAT, PHONE, WEB_FORM
          createdAt: '2026-09-08',  
        }
      ];


    getAllSupportTickets(): SupportTicketInfo[] {
        return this.supportTicketList;
    }

    getSupportTicketById(ticketId: String): SupportTicketInfo | undefined {
        return this.supportTicketList.find((supportTicket) => supportTicket.ticketId === ticketId);
    }
}
