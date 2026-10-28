import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBanner } from '../layout/page-banner';
import { FaqSection } from '../sections/faq-section';
import { CtaBand } from '../sections/cta-band';
@Component({
  selector: 'app-faq-page',
  imports: [PageBanner, FaqSection, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-banner title="FAQ" subtitle="Answers to common questions about our logistics and manpower consulting services" />
    <app-faq-section />
    <app-cta-band />
  `,
})
export class Faq {}
