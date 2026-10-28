import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COVERAGE, WHY } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** "Why Velumaya" reasons plus Saudi service-area chips. */
@Component({
  selector: 'app-why-section',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section--pad">
      <div class="container">
        <div class="section-heading">
          <span>Why Velumaya</span>
          <h2>A partner that understands the Saudi market</h2>
        </div>
        <div class="grid grid-4">
          @for (w of why; track w.title; let i = $index) {
            <div class="why" reveal [delay]="i * 0.1">
              <app-icon [name]="w.icon" />
              <h3>{{ w.title }}</h3>
              <p>{{ w.text }}</p>
            </div>
          }
        </div>

        <div class="coverage" reveal>
          <div class="cov-head"><app-icon name="pin" /><div><h3>Where we operate</h3><p>Major cities and industrial hubs across Saudi Arabia</p></div></div>
          <ul>@for (c of coverage; track c) { <li>{{ c }}</li> }</ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .why { padding: 28px 24px; border-left: 3px solid var(--blue); background: var(--bg-alt); height: 100%; transition: transform 0.4s, box-shadow 0.4s; }
    .why:hover { transform: translateY(-6px); box-shadow: var(--shadow); background: #fff; }
    .why > app-icon { font-size: 34px; color: var(--blue); margin-bottom: 16px; display: flex; }
    h3 { font-size: 18px; font-weight: 600; margin-bottom: 10px; }
    .coverage { margin-top: 50px; background: var(--navy); color: #fff; padding: 30px 36px; display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
    .cov-head { display: flex; gap: 16px; align-items: center; }
    .cov-head app-icon { font-size: 40px; color: var(--blue); flex: none; }
    .cov-head h3 { color: #fff; margin: 0 0 4px; }
    .cov-head p { color: #aebbd4; margin: 0; }
    .coverage ul { display: flex; flex-wrap: wrap; gap: 10px; }
    .coverage li { padding: 8px 16px; border: 1px solid rgba(255, 255, 255, 0.25); font-size: 14px; transition: all 0.3s; }
    .coverage li:hover { background: var(--blue); border-color: var(--blue); }
  `,
})
export class WhySection {
  why = WHY;
  coverage = COVERAGE;
}
