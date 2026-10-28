import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TEAM } from '../data/site.data';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-team-section',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section--pad">
      <div class="container">
        <div class="section-heading">
          <span>{{ t.eyebrow }}</span>
          <h2>{{ t.title }}</h2>
          <p>{{ t.subtitle }}</p>
        </div>
        @for (m of t.members; track m.name) {
          <div class="member" reveal>
            <div class="photo"><img [src]="m.image" [alt]="m.name" loading="lazy"></div>
            <div class="info">
              <span class="role">{{ m.role }}</span>
              <h3>{{ m.name }}</h3>
              <div class="line-dec"></div>
              @for (p of m.bio; track $index) { <p>{{ p }}</p> }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .member { display: grid; grid-template-columns: 320px 1fr; gap: 50px; align-items: center; max-width: 920px; margin: 0 auto; padding: 36px; background: #fff; box-shadow: var(--shadow); border-radius: var(--radius); border-bottom: 5px solid var(--blue); }
    .photo img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: var(--radius); }
    .role { color: var(--blue); font-size: 15px; font-weight: 600; }
    h3 { font-size: 28px; font-weight: 600; margin: 8px 0 14px; }
    .line-dec { margin-bottom: 18px; }
    @media (max-width: 760px) { .member { grid-template-columns: 1fr; gap: 24px; padding: 22px; } .photo { max-width: 260px; } }
  `,
})
export class TeamSection {
  t = TEAM;
}
