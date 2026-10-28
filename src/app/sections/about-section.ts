import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-about-section',
  imports: [RouterLink, Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section--pad" style="padding-top: 110px">
      <div class="container split">
        <div reveal>
          <span class="eyebrow">{{ a.eyebrow }}</span>
          <h2>{{ a.title }}</h2>
          <div class="line-dec"></div>
          @for (p of a.paragraphs; track $index) { <p>{{ p }}</p> }
          <ul>
            @for (pt of a.points; track pt) { <li><app-icon name="check" />{{ pt }}</li> }
          </ul>
          <a routerLink="/about" class="btn">Learn More <app-icon name="arrow" /></a>
        </div>
        <div reveal [delay]="0.15" class="media">
          <img src="images/transport-logistics-concept.jpg" alt="Logistics operations overview" loading="lazy">
          <span class="badge"><app-icon name="pin" />{{ a.badge }}</span>
        </div>
      </div>
    </section>
  `,
  styles: `
    .eyebrow { font-size: 17px; color: var(--blue); }
    h2 { margin: 12px 0 16px; font-size: 28px; font-weight: 600; }
    .line-dec { margin-bottom: 22px; }
    ul { margin: 22px 0 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 20px; }
    li { display: flex; gap: 10px; align-items: center; font-size: 14px; font-weight: 600; color: var(--ink); }
    li app-icon { color: #fff; background: var(--blue); border-radius: 50%; padding: 3px; font-size: 20px; flex: none; }
    .media { position: relative; }
    .media img { width: 100%; border-radius: var(--radius); box-shadow: 0 20px 40px -14px rgba(11, 37, 69, 0.4); aspect-ratio: 4 / 3; object-fit: cover; }
    .badge { position: absolute; left: -18px; bottom: 28px; display: flex; align-items: center; gap: 8px; background: var(--blue); color: #fff; padding: 12px 18px; font-weight: 600; box-shadow: var(--shadow); }
    @media (max-width: 640px) { ul { grid-template-columns: 1fr; } .badge { left: 10px; } }
  `,
})
export class AboutSection {
  a = ABOUT;
}
