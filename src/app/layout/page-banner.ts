import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Inner-page hero: template banner styling, shorter. */
@Component({
  selector: 'app-page-banner',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="banner" [style.background-image]="'linear-gradient(rgba(7,20,38,.72), rgba(7,20,38,.72)), url(' + image() + ')'">
      <div class="container">
        <div class="line-dec"></div>
        <h1>{{ title() }}</h1>
        <p>{{ subtitle() }}</p>
        <div class="crumbs"><a routerLink="/">Home</a> / <span>{{ title() }}</span></div>
      </div>
    </section>
  `,
  styles: `
    .banner { padding: 110px 0 100px; background-size: cover; background-position: center; color: #fff; }
    h1 { margin: 20px 0 14px; font-size: 42px; letter-spacing: 0.5px; }
    p { color: #e6edf8; font-size: 19px; max-width: 640px; margin-bottom: 20px; }
    .crumbs { font-size: 14px; color: #cfd9ee; a { color: var(--blue); } a:hover { text-decoration: underline; } }
    @media (max-width: 640px) { h1 { font-size: 32px; } p { font-size: 16px; } .banner { padding: 70px 0; } }
  `,
})
export class PageBanner {
  title = input.required<string>();
  subtitle = input('');
  image = input('images/truck-shipping-port.jpg');
}
