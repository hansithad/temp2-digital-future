import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  AboutBottom,
  Features,
  Hero,
  Jobs,
  Pricings,
  Reviews,
  Search,
  Team,
} from './components';

import {
  features,
  team,
  reviews,
  jobs,
  pricings,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  featuresSection: {
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: '#0c133e',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  aboutSection: {
    background: '#0c133e',
  },
}));

const StaffAugmentation = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <div className={classes.featuresSection}>
        <Section>
          <Features data={features} />
        </Section>
      </div>
      <SectionAlternate className={classes.aboutSection}>
        <About />
      </SectionAlternate>
      <Section>
        <Team data={team} />
      </Section>
      <Section>
        <Pricings data={pricings} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Jobs data={jobs} />
      </SectionAlternate>
      <Section>
        <Search />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <AboutBottom />
      </Section>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={reviews} />
      </SectionAlternate>
    </div>
  );
};

export default StaffAugmentation;
