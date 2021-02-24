import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  Features,
  Hero,
  Search,
  Team,
} from './components';

import {
  features,
  team,
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
        <Search />
      </Section>
    </div>
  );
};

export default StaffAugmentation;
