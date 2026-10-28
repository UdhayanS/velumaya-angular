import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBanner } from '../layout/page-banner';
import { ServicesSection } from '../sections/services-section';
import { ProcessSection } from '../sections/process-section';
import { IndustriesSection } from '../sections/industries-section';
import { CtaBand } from '../sections/cta-band';
@Component({
  selector: 'app-services-page',
  imports: [PageBanner, ServicesSection, ProcessSection, IndustriesSection, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-banner title="Our Services" subtitle="Reliable logistics and manpower solutions designed for business efficiency" />
    <app-services-section [detailed]="true" />
    <app-process-section style="display:block;margin-top:80px" />
    <app-industries-section />
    <app-cta-band />
  `,
})
export class Services {}
