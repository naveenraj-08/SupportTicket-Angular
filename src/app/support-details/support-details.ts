import { ChangeDetectorRef, Component, inject, input } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, RouterLink} from'@angular/router';
import { SupportTicketInfo } from '../support-ticket';
//import { SupportTicket } from '../support-ticket/support-ticket';
import { SupportService } from '../support';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-support-details',
  styleUrl: './support-details.css',
  templateUrl: './support-details.html',
  //template: `<p>Support details works! {{ ticketId }}</p>`,
})
export class SupportDetails {

  route: ActivatedRoute = inject(ActivatedRoute);

  supportService: SupportService = inject(SupportService); 

  supportTicketInfo : SupportTicketInfo | undefined;

  // ticketId = '';

   applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  //  constructor() {
  //     this.ticketId = String(this.route.snapshot.params['ticketId']);

  //     this.supportTicketInfo = this.supportService.getSupportTicketById(this.ticketId);

  //  }

   constructor() {
    const ticketId = String(this.route.snapshot.params['ticketId']);
    console.log('ticketId :: ',ticketId);
    this.supportService.getSupportTicketById(ticketId).then((supportTicketInfo) => {
      this.supportTicketInfo = supportTicketInfo;
      this.changeDetectorRef.markForCheck();
    });
  }

   submitApplication() {
    this.supportService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
