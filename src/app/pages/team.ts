import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBanner } from '../layout/page-banner';
import { TeamSection } from '../sections/team-section';
import { CtaBand } from '../sections/cta-band';
@Component({
  selector: 'app-team-page',
  imports: [PageBanner, TeamSection, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-banner title="Meet Our Team" subtitle="The visionary minds driving Velumaya Logistics forward" image="images/logistics-professional-overseeing-trucking-fleet.jpg" />
    <app-team-section />
    <app-cta-band />
  `,
})
export class Team {}
