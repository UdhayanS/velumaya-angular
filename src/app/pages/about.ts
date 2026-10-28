import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBanner } from '../layout/page-banner';
import { AboutSection } from '../sections/about-section';
import { HighlightsSection } from '../sections/highlights-section';
import { WhySection } from '../sections/why-section';
import { CtaBand } from '../sections/cta-band';
@Component({
  selector: 'app-about-page',
  imports: [PageBanner, AboutSection, HighlightsSection, WhySection, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-banner title="About Us" subtitle="Dependable logistics and workforce solutions for businesses across Saudi Arabia" image="images/transport-logistics-concept.jpg" />
    <app-about-section />
    <app-highlights-section />
    <app-why-section />
    <app-cta-band />
  `,
})
export class About {}
