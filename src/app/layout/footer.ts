import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COVERAGE, NAV, SERVICES, SITE } from '../data/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <div class="container footer__grid">
        <div>
          <a routerLink="/" class="logo"><img src="images/logo-trim.png" alt="Velumaya logo"><span>{{ site.brand }}</span></a>
          <p>Reliable logistics and manpower consulting solutions for businesses across Saudi Arabia.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            @for (n of nav; track n.path) { <li><a [routerLink]="n.path">{{ n.label }}</a></li> }
            <li><a routerLink="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            @for (s of services; track s.num) { <li><a routerLink="/services">{{ s.title }}</a></li> }
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="contact">
            <li><app-icon name="pin" />{{ site.location }}</li>
            @if (site.phone) { <li><app-icon name="phone" /><a [href]="'tel:' + site.phone.replaceAll(' ', '')">{{ site.phone }}</a></li> }
            <li><app-icon name="mail" /><a [href]="'mailto:' + site.email">{{ site.email }}</a></li>
            <li><app-icon name="linkedin" /><a [href]="site.linkedin" target="_blank" rel="noopener noreferrer">Follow us on LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="sub">
        <div class="container sub__inner">
          <span>Serving {{ coverage.slice(0, 4).join(' · ') }} &amp; more</span>
          <span>Copyright &copy; {{ site.year }} | {{ site.name }}</span>
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer { margin-top: 80px; background: var(--navy-deep); color: #aebbd4; }
    .footer__grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.3fr; gap: 40px; padding-block: 60px 40px; }
    .logo { display: flex; align-items: center; gap: 12px; color: #fff; font-weight: 700; font-size: 20px; margin-bottom: 16px; }
    .logo img { height: 46px; width: auto; }
    p { color: #aebbd4; }
    h4 { color: #fff; font-size: 17px; font-weight: 600; margin-bottom: 20px; }
    li { margin-bottom: 11px; font-size: 14px; }
    li a { transition: color 0.3s; }
    li a:hover { color: #fff; }
    .contact li { display: flex; gap: 10px; align-items: flex-start; }
    .contact app-icon { color: var(--blue); font-size: 18px; margin-top: 2px; flex: none; }
    .sub { border-top: 1px solid rgba(255, 255, 255, 0.1); }
    .sub__inner { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; padding-block: 20px; font-size: 13px; }
    @media (max-width: 860px) { .footer__grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 560px) { .footer__grid { grid-template-columns: 1fr; } }
  `,
})
export class Footer {
  site = SITE;
  nav = NAV;
  services = SERVICES;
  coverage = COVERAGE;
}
