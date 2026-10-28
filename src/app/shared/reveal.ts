import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Fades an element in the first time it scrolls into view. Usage: <div reveal [delay]="0.1"> */
@Directive({
  selector: '[reveal]',
  host: { class: 'reveal', '[attr.style]': '"--d:" + delay() + "s"' },
})
export class Reveal implements OnInit, OnDestroy {
  delay = input(0);
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  ngOnInit() {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.classList.add('in');
      return;
    }
    this.io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.el.classList.add('in');
          this.io?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.io.observe(this.el);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
