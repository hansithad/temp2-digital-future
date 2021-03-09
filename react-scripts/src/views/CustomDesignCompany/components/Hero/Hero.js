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
            subtitle="Our mission is to help you boost your digital projects through consultancy services as a way to quickly transform into a digital champion and temporary talent augmentation service as an efficient way to enhance your workforce eliminating the risk of wrong hire in most critical moments."
            ctaGroup={[
              <Button color="primary" variant="contained" size="large">
                Try for free
              </Button>,
              <Button color="secondary" variant="outlined" size="large">
                See pricings
              </Button>,
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
