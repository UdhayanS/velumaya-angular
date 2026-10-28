import { ChangeDetectionStrategy, Component, OnInit, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CONTACT, ENQUIRY_TYPES, SITE } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/**
 * Contact block: details + form + map. The old site had no backend either (mailto),
 * so submitting opens the visitor's mail client with the message pre-filled.
 */
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
            <label>Phone / Email<input name="contact" [(ngModel)]="contact" required></label>
          </div>
          <label>Service
            <select name="service" [(ngModel)]="service">
              <option value="">Select a service...</option>
              @for (t of types; track t) { <option [value]="t">{{ t }}</option> }
            </select>
          </label>
          <label>Subject<input name="subject" [(ngModel)]="subject"></label>
          <label>Your Message<textarea name="message" rows="5" [(ngModel)]="message" required></textarea></label>
          <button type="submit" class="btn btn--block" [disabled]="f.invalid">Send Message <app-icon name="send" /></button>
          @if (sent()) { <p class="ok" role="status">Opening your email app… if nothing happens, write to {{ site.email }}.</p> }
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

    .form { background: #fff; padding: 34px; box-shadow: var(--shadow); border-top: 5px solid var(--blue); display: grid; gap: 16px; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    label { display: grid; gap: 6px; font-size: 13px; font-weight: 600; color: #4a4a4a; }
    input, select, textarea { width: 100%; padding: 11px 14px; font-size: 14px; color: #333; background: var(--bg-alt); border: 1px solid #eee; outline: 0; transition: border-color 0.3s, background 0.3s; }
    input:focus, select:focus, textarea:focus { border-color: var(--blue); background: #fff; }
    textarea { resize: vertical; }
    .btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .ok { margin: 0; color: #1c8a4a; font-size: 13px; }
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
  contact = '';
  service = '';
  subject = '';
  message = '';
  sent = signal(false);
  mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`,
  );
  private route = inject(ActivatedRoute);

  /** Pre-fill from the home page quick-enquiry bar / "Request a quote" links. */
  ngOnInit() {
    const q = this.route.snapshot.queryParamMap;
    this.name = q.get('name') ?? '';
    this.contact = q.get('contact') ?? '';
    this.service = q.get('service') ?? '';
    if (this.service) this.subject = `Enquiry: ${this.service}`;
  }

  send() {
    const lines = [`Name: ${this.name}`, `Contact: ${this.contact}`];
    if (this.service) lines.push(`Service: ${this.service}`);
    const body = [...lines, '', this.message].join('\n');
    const subject = this.subject || 'Website enquiry';
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.sent.set(true);
  }
}
