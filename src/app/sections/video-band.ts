import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../shared/icon';

/** Full-width photo band with a slow zoom and overlay copy (the old mp4 was an unrelated portrait screen recording). */
@Component({
  selector: 'app-video-band',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="video">
      <div class="bg" aria-hidden="true" [style.background-image]="'url(images/truck-shipping-port.jpg)'"></div>
      <div class="overlay"></div>
      <div class="inner">
        <span>Built for the Kingdom's growth</span>
        <h2>Moving goods and people, on time, across Saudi Arabia</h2>
        <a routerLink="/contact" class="btn btn--ghost">Talk to our team <app-icon name="arrow" /></a>
      </div>
    </section>
  `,
  styles: `
    .video { position: relative; height: 480px; overflow: hidden; padding: 0; margin-top: 80px; background: var(--navy-deep); }
    .bg { position: absolute; inset: 0; background-position: center; background-size: cover; background-repeat: no-repeat; animation: drift 24s ease-in-out infinite alternate; }
    @keyframes drift { to { transform: scale(1.12); } }
    @media (prefers-reduced-motion: reduce) { .bg { animation: none; } }
    .overlay { position: absolute; inset: 0; background: rgba(7, 20, 38, 0.7); }
    .inner { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #fff; padding: 0 20px; gap: 14px; }
    span { font-size: 17px; color: #9cc0ff; }
    h2 { font-size: 32px; font-weight: 600; max-width: 760px; letter-spacing: 0.5px; margin-bottom: 14px; }
    @media (max-width: 640px) { h2 { font-size: 22px; line-height: 1.35; } .video { height: 420px; margin-top: 60px; } .inner { padding: 0 24px; } }
  `,
})
export class VideoBand {}
