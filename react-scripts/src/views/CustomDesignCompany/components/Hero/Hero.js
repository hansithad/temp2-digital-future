import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section, HeroSimpleBackground } from 'components/organisms';

const Hero = props => {
  const { className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <HeroSimpleBackground backgroundImage="https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg">
        <Section narrow>
          <SectionHeader
            title={
              <span>
                Supercharge Your Digital Transformation through{' '}
                <Typography color="secondary" variant="inherit" component="span">Digital Consultancy and Talent Services</Typography>
              </span>
            }
            titleVariant="h3"
            subtitle="Our mission is to help you boost your digital projects. Through consultancy services we help you quickly transform into a digital champion. With our temporary digital talent augmentation service we enhance your workforce, reducing costs and eliminating the risk of wrong hire in most critical moments."
            ctaGroup={[
              <a href="/digital-transformation" title="Consultancy">
              <Button color="primary" variant="contained" size="large">
                Consultancy
              </Button></a>,
              <a href="/talent-augmentation" title="Consultancy">
              <Button color="secondary" variant="outlined" size="large">
                Talent Services
              </Button></a>,
            ]}
            disableGutter
          />

        </Section>
      </HeroSimpleBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
