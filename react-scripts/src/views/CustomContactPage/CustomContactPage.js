import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Contact, Form, Hero } from './components';

import { mapData } from './data';

const CustomContactPage = () => (
  <div>
    <Hero />
    <Contact data={mapData} />
    <SectionAlternate>
      <Form />
    </SectionAlternate>
    <Divider />
  </div>
);

export default CustomContactPage;
