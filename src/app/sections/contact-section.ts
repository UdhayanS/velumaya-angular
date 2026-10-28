import { ChangeDetectionStrategy, Component, OnInit, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EMAILJS } from '../data/emailjs.config';
import { CONTACT, ENQUIRY_TYPES, SITE } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Mailer } from '../shared/mailer';
import { Reveal } from '../shared/reveal';

/** Contact block: details + form + map. The form sends through EmailJS (see Mailer). */
@Component({
  selector: 'app-contact-section',
  imports: [FormsModule, Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section--pad">
      <div class="container split top">
        <div reveal>
          <span class="eyebrow">{{ c.eyebrow }}</span>
          <h2>{{ c.title }}</h2>
          <h3>{{ c.subtitle }}</h3>
          <p>{{ c.text }}</p>
          <ul class="list">
            <li><span><app-icon name="pin" /></span><div><small>Location</small>{{ site.location }}</div></li>
            @if (site.phone) {
              <li><span><app-icon name="phone" /></span><div><small>Phone</small><a [href]="'tel:' + site.phone.replaceAll(' ', '')">{{ site.phone }}</a></div></li>
            }
            <li><span><app-icon name="mail" /></span><div><small>Email</small><a [href]="'mailto:' + site.email">{{ site.email }}</a></div></li>
            <li><span><app-icon name="linkedin" /></span><div><small>LinkedIn</small><a [href]="site.linkedin" target="_blank" rel="noopener noreferrer">Velumaya Logistics</a></div></li>
          </ul>
        </div>

        <form class="form" reveal [delay]="0.15" (ngSubmit)="send()" #f="ngForm">
          <div class="row">
            <label>Full Name<input name="name" [(ngModel)]="name" required></label>
            <label>Phone Number<input name="phone" type="tel" autocomplete="tel" [(ngModel)]="phone" placeholder="+966 ..."></label>
          </div>
          <label>Email Address<input name="email" type="email" autocomplete="email" [(ngModel)]="email" required email></label>
          <label>Service
            <select name="service" [(ngModel)]="service">
              <option value="">Select a service...</option>
              @for (t of types; track t) { <option [value]="t">{{ t }}</option> }
            </select>
          </label>
          <label>Subject<input name="subject" [(ngModel)]="subject"></label>
          <label>Your Message<textarea name="message" rows="5" [(ngModel)]="message" required></textarea></label>
          <input class="hp" name="company" [(ngModel)]="trap" tabindex="-1" autocomplete="off" aria-hidden="true">
          <button type="submit" class="btn btn--block" [disabled]="f.invalid || status() === 'sending'">
            {{ status() === 'sending' ? 'Sending…' : 'Send Message' }} <app-icon name="send" />
          </button>
          @if (status() === 'sent') { <p class="ok" role="status">Thank you! Your message has been sent.{{ autoReply ? ' We have emailed you a confirmation and' : ' We' }} will reply shortly.</p> }
          @if (status() === 'error') { <p class="err" role="alert">Sorry, we could not send your message. Please try again or email us at <a [href]="'mailto:' + site.email">{{ site.email }}</a>.</p> }
        </form>
      </div>

      @if (showMap()) {
        <div class="map" reveal><iframe title="Map" loading="lazy" [src]="mapUrl" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      }
    </section>
  `,
  styles: `
    .top { align-items: start; }
    .eyebrow { font-size: 17px; color: var(--blue); }
    h2 { margin: 12px 0 10px; font-size: 28px; font-weight: 600; }
    h3 { font-size: 19px; font-weight: 600; margin-bottom: 14px; }
    .list { margin-top: 26px; }
    .list li { display: flex; gap: 16px; align-items: center; margin-bottom: 20px; font-size: 15px; }
    .list span { width: 50px; height: 50px; flex: none; border-radius: 50%; background: var(--blue); color: #fff; display: grid; place-items: center; font-size: 22px; }
    small { display: block; color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px; }
    .list a:hover { color: var(--blue); }

    .form { position: relative; background: #fff; padding: 34px; box-shadow: var(--shadow); border-top: 5px solid var(--blue); display: grid; gap: 16px; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    label { display: grid; gap: 6px; font-size: 13px; font-weight: 600; color: #4a4a4a; }
    input, select, textarea { width: 100%; padding: 11px 14px; font-size: 14px; color: #333; background: var(--bg-alt); border: 1px solid #eee; outline: 0; transition: border-color 0.3s, background 0.3s; }
    input:focus, select:focus, textarea:focus { border-color: var(--blue); background: #fff; }
    textarea { resize: vertical; }
    .btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .ok { margin: 0; color: #1c8a4a; font-size: 14px; line-height: 1.6; }
    .err { margin: 0; color: #c0392b; font-size: 14px; line-height: 1.6; a { text-decoration: underline; } }
    .hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
    .map { margin-top: 70px; height: 380px; }
    iframe { width: 100%; height: 100%; border: 0; filter: grayscale(0.2); }
    @media (max-width: 560px) { .row { grid-template-columns: 1fr; } .form { padding: 22px; } }
  `,
})
export class ContactSection implements OnInit {
  showMap = input(true);
  site = SITE;
  c = CONTACT;
  types = ENQUIRY_TYPES;
  name = '';
  phone = '';
  email = '';
  service = '';
  subject = '';
  message = '';
  trap = '';
  autoReply = !!EMAILJS.autoReplyTemplateId;
  status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`,
  );
  private route = inject(ActivatedRoute);
  private mailer = inject(Mailer);

  /** Pre-fill from the home page quick-enquiry bar / "Request a quote" links. */
  ngOnInit() {
    const q = this.route.snapshot.queryParamMap;
    this.name = q.get('name') ?? '';
    const contact = q.get('contact') ?? '';
    if (contact.includes('@')) this.email = contact;
    else this.phone = contact;
    this.service = q.get('service') ?? '';
    if (this.service) this.subject = `Enquiry: ${this.service}`;
  }

  async send() {
    if (this.trap) { // bots fill the hidden field; pretend success
      this.status.set('sent');
      return;
    }
    this.status.set('sending');
    try {
      await this.mailer.send({
        name: this.name.trim(),
        phone: this.phone.trim(),
        email: this.email.trim(),
        service: this.service,
        subject: this.subject.trim(),
        message: this.message.trim(),
      });
      this.status.set('sent');
      this.name = this.phone = this.email = this.service = this.subject = this.message = '';
    } catch (err) {
      console.error('Email send failed', err);
      this.status.set('error');
    }
  }
}
