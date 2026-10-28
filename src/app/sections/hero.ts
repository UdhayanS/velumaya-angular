import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ENQUIRY_TYPES, HERO } from '../data/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [FormsModule, RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="banner" [style.background-image]="bg">
      <div class="container">
        <div class="caption">
          <div class="line-dec"></div>
          <span class="eyebrow">{{ hero.eyebrow }}</span>
          <h1>{{ hero.title }}</h1>
          <p>{{ hero.subtitle }}</p>
          <div class="actions">
            <a routerLink="/services" class="btn">Our Services <app-icon name="arrow" /></a>
            <a routerLink="/contact" class="btn btn--ghost">Contact Us</a>
          </div>
        </div>

        <form class="quick" (ngSubmit)="go()">
          <label class="f"><app-icon name="users" /><input name="name" [(ngModel)]="name" placeholder="Your name..." required></label>
          <label class="f"><app-icon name="mail" /><input name="contact" [(ngModel)]="contact" placeholder="Email or phone..." required></label>
          <label class="f"><app-icon name="truck" />
            <select name="service" [(ngModel)]="service" required>
              <option value="" disabled>Select a service...</option>
              @for (t of types; track t) { <option [value]="t">{{ t }}</option> }
            </select>
          </label>
          <button type="submit" class="go">Get a Quote</button>
        </form>
      </div>
    </section>
  `,
  styles: `
    .banner { padding: 0; background-position: center; background-size: cover; background-repeat: no-repeat; color: #fff; }
    .caption { padding: 150px 0 120px; max-width: 700px; }
    .eyebrow { display: block; margin-top: 22px; font-size: 17px; letter-spacing: 3px; text-transform: uppercase; color: #9cc0ff; font-weight: 600; }
    h1 { margin: 14px 0 18px; font-size: 48px; font-weight: 700; letter-spacing: 0.5px; }
    p { font-size: 20px; line-height: 32px; color: #e6edf8; }
    .actions { margin-top: 30px; display: flex; gap: 14px; flex-wrap: wrap; }

    .quick { display: grid; grid-template-columns: repeat(3, 1fr) auto; background: #fff; border-bottom: 5px solid var(--blue); padding: 15px; margin-bottom: -45px; position: relative; z-index: 5; box-shadow: var(--shadow); }
    .f { display: flex; align-items: center; gap: 10px; padding: 0 14px; border-right: 1px solid var(--line); color: var(--blue); font-size: 20px; }
    input, select { width: 100%; height: 50px; border: 0; outline: 0; background: transparent; font-size: 15px; color: #6b6b6b; }
    .go { height: 50px; padding: 0 34px; border: 2px solid var(--blue); background: var(--blue); color: #fff; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.5s; }
    .go:hover { background: transparent; color: var(--blue); }

    @media (max-width: 991px) {
      .quick { grid-template-columns: minmax(0, 1fr); gap: 6px; }
      .f { border-right: 0; border-bottom: 1px solid var(--line); }
      h1 { font-size: 36px; }
    }
    @media (max-width: 640px) { .caption { padding: 90px 0 80px; } h1 { font-size: 30px; } p { font-size: 17px; } }
  `,
})
export class Hero {
  // Relative url so it follows <base href> (the site is served from a sub-path on GitHub Pages).
  bg = 'linear-gradient(105deg, rgba(7, 20, 38, 0.88) 15%, rgba(7, 20, 38, 0.45)), url(images/logistics-professional-overseeing-trucking-fleet.jpg)';
  hero = HERO;
  types = ENQUIRY_TYPES;
  name = '';
  contact = '';
  service = '';
  private router = inject(Router);

  go() {
    this.router.navigate(['/contact'], { queryParams: { name: this.name, contact: this.contact, service: this.service } });
  }
}
