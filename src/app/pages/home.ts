import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../sections/hero';
import { AboutSection } from '../sections/about-section';
import { HighlightsSection } from '../sections/highlights-section';
import { IndustriesSection } from '../sections/industries-section';
import { ServicesSection } from '../sections/services-section';
import { ProcessSection } from '../sections/process-section';
import { VideoBand } from '../sections/video-band';
import { WhySection } from '../sections/why-section';
import { TeamSection } from '../sections/team-section';
import { FaqSection } from '../sections/faq-section';
import { ContactSection } from '../sections/contact-section';
@Component({
  selector: 'app-home-page',
  imports: [Hero, AboutSection, HighlightsSection, IndustriesSection, ServicesSection, ProcessSection, VideoBand, WhySection, TeamSection, FaqSection, ContactSection],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about-section />
    <app-highlights-section />
    <app-industries-section />
    <app-services-section />
    <app-process-section />
    <app-video-band />
    <app-why-section />
    <app-team-section />
    <app-faq-section [limit]="4" />
    <app-contact-section />
  `,
})
export class Home {}
