import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV, SITE } from '../data/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="topbar">
      <div class="container topbar__inner">
        <div class="topbar__group">
          @if (site.phone) {
            <a [href]="'tel:' + site.phone.replaceAll(' ', '')"><app-icon name="phone" />{{ site.phone }}</a>
          }
          <a [href]="'mailto:' + site.email"><app-icon name="mail" />{{ site.email }}</a>
          <a [href]="site.linkedin" target="_blank" rel="noopener noreferrer" aria-label="Velumaya on LinkedIn"><app-icon name="linkedin" />LinkedIn</a>
        </div>
        <span><app-icon name="pin" />{{ site.location }}</span>
      </div>
    </div>

    <header class="header" [class.header--stuck]="stuck()">
      <div class="container header__inner">
        <a routerLink="/" class="logo" (click)="open.set(false)">
          <img src="images/logo-trim.png" alt="Velumaya logo" width="285" height="213">
          <span>{{ site.brand }}<small>Logistics</small></span>
        </a>

        <nav class="nav" [class.nav--open]="open()">
          @for (n of nav; track n.path) {
            <a [routerLink]="n.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: n.path === '/' }" (click)="open.set(false)">{{ n.label }}</a>
          }
          <a routerLink="/contact" class="nav__cta" (click)="open.set(false)">Contact Us</a>
        </nav>

        <button class="burger" type="button" aria-label="Toggle menu" [attr.aria-expanded]="open()" (click)="open.set(!open())">
          <app-icon [name]="open() ? 'close' : 'menu'" />
        </button>
      </div>
    </header>
  `,
  styles: `
    .topbar { background: var(--navy); color: #cfd9ee; font-size: 13px; }
    .topbar__inner { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding-block: 9px; flex-wrap: wrap; }
    .topbar__group { display: flex; gap: 22px; flex-wrap: wrap; }
    .topbar a, .topbar span { display: inline-flex; align-items: center; gap: 7px; }
    .topbar a:hover { color: #fff; }
    .topbar app-icon { color: var(--blue); font-size: 14px; }
    @media (max-width: 640px) { .topbar span { display: none; } }

    .header { position: sticky; top: 0; z-index: 100; background: #fff; transition: box-shadow 0.3s; }
    .header--stuck { box-shadow: 0 5px 18px rgba(0, 0, 0, 0.12); }
    .header__inner { display: flex; align-items: center; justify-content: space-between; height: 84px; }

    .logo { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 20px; color: var(--navy); letter-spacing: 0.5px; line-height: 1.1; }
    .logo img { height: 52px; width: auto; }
    .logo small { display: block; font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--blue); margin-top: 3px; }

    .nav { display: flex; align-items: center; gap: 4px; }
    .nav a { padding: 8px 15px; font-size: 15px; color: #121212; transition: color 0.4s; }
    .nav a:hover, .nav a.active { color: var(--blue); }
    .nav a.nav__cta { margin-left: 14px; background: var(--blue); color: #fff; border: 2px solid var(--blue); padding: 8px 18px; transition: all 0.5s; }
    .nav a.nav__cta:hover { background: transparent; color: var(--blue); }

    .burger { display: none; background: var(--blue); color: #fff; border: 0; width: 44px; height: 44px; font-size: 24px; cursor: pointer; align-items: center; justify-content: center; }

    @media (max-width: 860px) {
      .burger { display: inline-flex; }
      .nav { position: absolute; top: 84px; left: 0; right: 0; background: #fff; flex-direction: column; align-items: stretch; gap: 0; max-height: 0; overflow: hidden; box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12); transition: max-height 0.35s ease; }
      .nav--open { max-height: 460px; }
      .nav a { padding: 14px 20px; border-top: 1px solid var(--line); text-align: center; }
      .nav a.nav__cta { margin: 14px 20px; text-align: center; }
    }
  `,
})
export class Header {
  site = SITE;
  nav = NAV;
  open = signal(false);
  stuck = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.stuck.set(window.scrollY > 40);
  }
}
