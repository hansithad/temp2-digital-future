import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import heroImage from './staff.png'

const useStyles = makeStyles(theme => ({
  root: {

    backgroundSize: 'contain',
    backgroundColor: theme.palette.alternate.main,
  },
  cover: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
    objectPosition: '6% 0'
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title="Easily strenghten your team with Digital Experts."
            subtitle="Forward thinking businesses use our talent augmentation service as an alternative to standard consulting project formula or full time hiring, strenghtening their internal capabilities at a fraction of cost."
            subtitleColor="textPrimary"
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              src={heroImage}
              // srcSet="https://assets.maccarianagency.com/the-front/photos/logistics/cover@2x.png 2x"
              className={classes.image}
              lazyProps={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        }
      />
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
