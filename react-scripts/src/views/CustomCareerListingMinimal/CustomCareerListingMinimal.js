import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Articles,Teaser, Features, Hero, CustomJobs, Newsletter } from './components';

import { aricles, features, jobs } from './data';

const CustomCareerListingMinimal = () => (
  <div>
    <Hero />
    <Section>
      <Teaser />
    </Section>
    <Section>
      <Articles data={aricles} />
    </Section>
    <Features data={features} />
    <SectionAlternate>
      <CustomJobs data={jobs} />
    </SectionAlternate>
    <Section>
      <Newsletter />
    </Section>
    <Divider />
  </div>
);

export default CustomCareerListingMinimal;
