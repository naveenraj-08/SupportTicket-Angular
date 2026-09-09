
export interface SupportTicketInfo {
    ticketId: String;
    traceId: String;
    customerId: String;
    customerName: String;
    subject: String;
    description: String;
    channel: String; // EMAIL, CHAT, PHONE, WEB_FORM
    createdAt: String;
}

