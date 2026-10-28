import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CTA } from '../data/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-cta-band',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta">
      <div class="container inner">
        <div><h3>{{ cta.text }}</h3><p>{{ cta.sub }}</p></div>
        <a routerLink="/contact" class="btn btn--ghost">Contact Us <app-icon name="arrow" /></a>
      </div>
    </section>
  `,
  styles: `
    .cta { margin-top: 80px; padding: 46px 0; background: var(--blue); color: #fff; }
    .inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
    h3 { font-size: 26px; font-weight: 600; margin-bottom: 6px; }
    p { color: #e8efff; margin: 0; font-size: 15px; }
  `,
})
export class CtaBand {
  cta = CTA;
}
