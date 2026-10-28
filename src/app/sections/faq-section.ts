import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { FAQS } from '../data/site.data';
import { Reveal } from '../shared/reveal';

/** Template accordion (one open at a time). `limit` shows a subset on the home page. */
@Component({
  selector: 'app-faq-section',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="band">
      <div class="container narrow">
        <div class="section-heading">
          <span>Support</span>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to common questions about our logistics and manpower consulting services</p>
        </div>
        <ul class="accordion">
          @for (f of items(); track f.q; let i = $index) {
            <li reveal [delay]="i * 0.06" [class.open]="openIdx() === i">
              <button type="button" [attr.aria-expanded]="openIdx() === i" (click)="openIdx.set(openIdx() === i ? -1 : i)">
                {{ f.q }}<i></i>
              </button>
              <div class="body"><div><p>{{ f.a }}</p></div></div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .band { background: var(--bg-alt); padding-bottom: 80px; margin-top: 80px; }
    .narrow { max-width: 860px; }
    li { background: #fff; border: 1px solid var(--line); margin-bottom: 12px; }
    button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; text-align: left; background: none; border: 0; padding: 18px 22px; font-size: 17px; font-weight: 600; color: var(--ink); cursor: pointer; letter-spacing: 0.3px; }
    i { flex: none; width: 15px; height: 15px; border-radius: 50%; background: var(--line); transition: all 0.2s; }
    .open i { background: var(--blue); }
    .open button { color: var(--blue); }
    .body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.35s ease; }
    .body > div { overflow: hidden; }
    .open .body { grid-template-rows: 1fr; }
    .body p { margin: 0; padding: 4px 22px 22px; }
  `,
})
export class FaqSection {
  limit = input<number | null>(null);
  openIdx = signal(0);
  items = computed(() => FAQS.slice(0, this.limit() ?? FAQS.length));
}
