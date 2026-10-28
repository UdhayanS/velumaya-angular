import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Seo } from './shared/seo';
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { Icon } from './shared/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
    <button type="button" class="go-top" [class.show]="showTop()" aria-label="Back to top" (click)="toTop()"><app-icon name="up" /></button>
  `,
  styles: `
    .go-top { position: fixed; right: 22px; bottom: 22px; z-index: 90; width: 46px; height: 46px; border: 0; background: var(--blue); color: #fff; font-size: 22px; cursor: pointer; display: grid; place-items: center; opacity: 0; pointer-events: none; transform: translateY(12px); transition: all 0.4s; box-shadow: 0 6px 18px rgba(72, 131, 255, 0.45); }
    .go-top.show { opacity: 1; pointer-events: auto; transform: none; }
    .go-top:hover { background: var(--navy); }
  `,
})
export class App {
  showTop = signal(false);

  constructor() {
    const router = inject(Router);
    const seo = inject(Seo);
    router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      let r = router.routerState.snapshot.root;
      while (r.firstChild) r = r.firstChild;
      const path = e.urlAfterRedirects.split(/[?#]/)[0];
      seo.update(path, r.title ?? 'Velumaya Logistics LLC', (r.data['description'] as string) ?? '');
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showTop.set(window.scrollY > 500);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
