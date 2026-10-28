import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROCESS } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-process-section',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section--pad">
      <div class="container">
        <div class="section-heading">
          <span>How We Work</span>
          <h2>A simple, transparent process</h2>
        </div>
        <ol class="steps">
          @for (s of steps; track s.title; let i = $index) {
            <li reveal [delay]="i * 0.12">
              <div class="dot"><app-icon [name]="s.icon" /><b>{{ i + 1 }}</b></div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .steps { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; position: relative; }
    .steps::before { content: ''; position: absolute; top: 44px; left: 12%; right: 12%; border-top: 2px dashed #bcd0ff; }
    li { position: relative; text-align: center; padding: 0 8px; }
    .dot { position: relative; width: 88px; height: 88px; margin: 0 auto 22px; border-radius: 50%; background: #fff; border: 2px solid var(--blue); color: var(--blue); display: grid; place-items: center; font-size: 34px; box-shadow: 0 0 0 8px #fff; }
    .dot b { position: absolute; top: -4px; right: -4px; width: 28px; height: 28px; border-radius: 50%; background: var(--blue); color: #fff; font-size: 13px; display: grid; place-items: center; }
    h3 { font-size: 18px; font-weight: 600; margin-bottom: 10px; }
    @media (max-width: 860px) { .steps { grid-template-columns: repeat(2, 1fr); row-gap: 44px; } .steps::before { display: none; } }
    @media (max-width: 520px) { .steps { grid-template-columns: 1fr; } }
  `,
})
export class ProcessSection {
  steps = PROCESS;
}
