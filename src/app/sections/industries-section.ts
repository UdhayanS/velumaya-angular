import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { INDUSTRIES } from '../data/site.data';
import { Icon } from '../shared/icon';

/** Template "popular places" carousel, restyled as industries. Native scroll-snap + arrows + auto-advance. */
@Component({
  selector: 'app-industries-section',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="industries">
      <div class="container-fluid">
        <div class="section-heading">
          <span>Industries We Serve</span>
          <h2>Solutions across every sector of the Kingdom</h2>
        </div>
        <div class="wrap" (mouseenter)="paused = true" (mouseleave)="paused = false">
          <button type="button" class="arrow arrow--l" aria-label="Previous" (click)="scroll(-1)"><app-icon name="left" /></button>
          <div class="track" #track>
            @for (i of items; track i.title) {
              <article class="card">
                <img [src]="i.image" [style.object-position]="i.pos" alt="" loading="lazy">
                <div class="shade"></div>
                <div class="text">
                  <app-icon [name]="i.icon" class="ic" />
                  <h3>{{ i.title }}</h3>
                  <span>{{ i.text }}</span>
                </div>
              </article>
            }
          </div>
          <button type="button" class="arrow arrow--r" aria-label="Next" (click)="scroll(1)"><app-icon name="right" /></button>
        </div>
      </div>
    </section>
  `,
  styles: `
    .container-fluid { padding-inline: 15px; }
    .wrap { position: relative; }
    .track { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding-bottom: 6px; }
    .track::-webkit-scrollbar { display: none; }
    .card { position: relative; flex: 0 0 calc((100% - 80px) / 5); min-width: 260px; aspect-ratio: 3 / 4; scroll-snap-align: start; border-radius: var(--radius); overflow: hidden; color: #fff; }
    .card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s; }
    .card:hover img { transform: scale(1.08); }
    .shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11, 37, 69, 0.1) 30%, rgba(7, 20, 38, 0.92)); }
    .text { position: absolute; left: 20px; right: 20px; bottom: 20px; }
    .ic { font-size: 28px; color: #9cc0ff; margin-bottom: 10px; display: flex; }
    h3 { font-size: 19px; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 6px; }
    .text span { font-size: 13px; font-weight: 300; line-height: 20px; display: block; color: #dbe6fb; }
    .arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; width: 44px; height: 44px; border: 0; border-radius: 50%; background: #fff; color: var(--blue); font-size: 22px; display: grid; place-items: center; cursor: pointer; box-shadow: var(--shadow); transition: all 0.3s; }
    .arrow:hover { background: var(--blue); color: #fff; }
    .arrow--l { left: 8px; }
    .arrow--r { right: 8px; }
    @media (max-width: 991px) { .card { flex-basis: calc((100% - 40px) / 3); } }
    @media (max-width: 640px) { .card { flex-basis: 78%; } }
  `,
})
export class IndustriesSection implements OnInit, OnDestroy {
  items = INDUSTRIES;
  paused = false;
  private track = viewChild.required<ElementRef<HTMLElement>>('track');
  private platformId = inject(PLATFORM_ID);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return; // no timers during prerender
    if (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.timer = setInterval(() => !this.paused && this.scroll(1), 4500);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  scroll(dir: 1 | -1) {
    const el = this.track().nativeElement;
    const step = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 280;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else el.scrollBy({ left: dir * (step + 20), behavior: 'smooth' });
  }
}
