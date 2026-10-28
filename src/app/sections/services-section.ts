import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../data/site.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** Template "featured places" cards on a grey band, used for the four services. */
@Component({
  selector: 'app-services-section',
  imports: [RouterLink, Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="band">
      <div class="container">
        <div class="section-heading">
          <span>What We Do</span>
          <h2>Our Services</h2>
          <p>Reliable logistics and manpower solutions designed for business efficiency</p>
        </div>
        <div class="grid grid-4">
          @for (s of items; track s.num; let i = $index) {
            <article class="card" reveal [delay]="i * 0.1">
              <div class="thumb">
                <img [src]="s.image" [alt]="s.title" loading="lazy">
                <span class="num">{{ s.num }}</span>
              </div>
              <div class="down">
                <h3>{{ s.title }}</h3>
                <p>{{ s.text }}</p>
                @if (detailed()) {
                  <ul>@for (b of s.bullets; track b) { <li><app-icon name="check" />{{ b }}</li> }</ul>
                }
                <a routerLink="/contact" [queryParams]="{ service: s.title }" class="more">Request a quote <app-icon name="arrow" /></a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .band { background: var(--bg-alt); padding-bottom: 80px; margin-top: 80px; }
    .card { background: #fff; border-radius: var(--radius); box-shadow: var(--shadow); display: flex; flex-direction: column; transition: transform 0.4s, box-shadow 0.4s; overflow: hidden; }
    .card:hover { transform: translateY(-8px); box-shadow: 0 18px 34px -12px rgba(11, 37, 69, 0.28); }
    .thumb { position: relative; background: linear-gradient(135deg, #eaf1ff, #f8faff); padding: 30px; display: grid; place-items: center; }
    .thumb img { height: 120px; width: auto; object-fit: contain; transition: transform 0.5s; }
    .card:hover .thumb img { transform: scale(1.1); }
    .num { position: absolute; top: 14px; right: 14px; width: 46px; height: 46px; border-radius: 50%; background: var(--blue); color: #fff; font-weight: 700; display: grid; place-items: center; font-size: 15px; }
    .down { padding: 22px 22px 0; display: flex; flex-direction: column; flex: 1; }
    h3 { font-size: 19px; font-weight: 600; margin-bottom: 10px; }
    ul { margin: 0 0 16px; }
    li { display: flex; gap: 8px; align-items: center; font-size: 13px; color: var(--ink); margin-bottom: 8px; }
    li app-icon { color: var(--blue); flex: none; }
    .more { margin: auto -22px 0; display: flex; align-items: center; justify-content: center; gap: 8px; height: 50px; border-top: 1px solid var(--line); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--muted); transition: color 0.4s; }
    .more:hover { color: var(--blue); }
  `,
})
export class ServicesSection {
  items = SERVICES;
  detailed = input(false);
}
