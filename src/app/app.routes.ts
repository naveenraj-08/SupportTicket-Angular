import { Routes } from '@angular/router';
import { SupportComponent } from './support-component/support-component';
import { SupportDetails } from './support-details/support-details';

export const routes: Routes = [{
    path: '',
    component: SupportComponent,
    title: 'Home page',
  },
  {
    path: 'ticketDetails/:ticketId',
    component: SupportDetails,
    title: 'Support details',
  },
];
