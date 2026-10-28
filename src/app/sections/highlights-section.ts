import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HIGHLIGHTS } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** Template "service-item" bordered boxes. */
@Component({
  selector: 'app-highlights-section',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="container grid grid-3">
        @for (h of items; track h.title; let i = $index) {
          <article class="item" reveal [delay]="i * 0.12">
            <div class="icon"><app-icon [name]="h.icon" /></div>
            <h3>{{ h.title }}</h3>
            <p>{{ h.text }}</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .item { text-align: center; border: 1px solid var(--line); border-radius: 10px; padding: 46px 30px; transition: all 0.4s; background: #fff; }
    .item:hover { border-color: var(--blue); box-shadow: 0 14px 30px -12px rgba(72, 131, 255, 0.35); transform: translateY(-6px); }
    .icon { width: 76px; height: 76px; margin: 0 auto 24px; display: grid; place-items: center; border-radius: 50%; background: #eef3ff; color: var(--blue); font-size: 34px; transition: all 0.4s; }
    .item:hover .icon { background: var(--blue); color: #fff; }
    h3 { font-size: 19px; font-weight: 600; margin-bottom: 14px; }
  `,
})
export class HighlightsSection {
  items = HIGHLIGHTS;
}
