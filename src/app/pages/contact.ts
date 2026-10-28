import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBanner } from '../layout/page-banner';
import { ContactSection } from '../sections/contact-section';
@Component({
  selector: 'app-contact-page',
  imports: [PageBanner, ContactSection],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-banner title="Contact Us" subtitle="Let's discuss your logistics and manpower requirements" />
    <app-contact-section />
  `,
})
export class Contact {}
