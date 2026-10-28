import { Injectable } from '@angular/core';
import { EMAILJS } from '../data/emailjs.config';

export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

/** Sends the enquiry to Velumaya, then an auto-reply to the visitor, through EmailJS (Gmail service). */
@Injectable({ providedIn: 'root' })
export class Mailer {
  async send(e: Enquiry): Promise<void> {
    // Loaded on demand so it never runs during prerendering.
    const { default: emailjs } = await import('@emailjs/browser');
    const opts = { publicKey: EMAILJS.publicKey };

    // Variable names must match the {{placeholders}} in the EmailJS templates.
    const params = {
      from_name: e.name,
      phone_number: e.phone || 'Not provided',
      email: e.email,
      reply_to: e.email,
      service: e.service || 'General enquiry',
      subject: e.subject || 'Website enquiry',
      message: e.message,
      submitted_at: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', dateStyle: 'medium', timeStyle: 'short' }) + ' (KSA)',
    };

    await emailjs.send(EMAILJS.serviceId, EMAILJS.notifyTemplateId, params, opts);

    // The enquiry is already delivered at this point, so an auto-reply failure must not surface as an error.
    if (EMAILJS.autoReplyTemplateId) {
      try {
        await emailjs.send(EMAILJS.serviceId, EMAILJS.autoReplyTemplateId, params, opts);
      } catch (err) {
        console.warn('Auto-reply failed', err);
      }
    }
  }
}
