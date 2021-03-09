import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  featureCardFirstItem: {
    background: theme.palette.secondary.main,
    '& h3, & h6': {
      color: 'white',
    },
  },
  featureIcon: {
    fontSize: 120,
    marginBottom: theme.spacing(2),
  },
  featureCard: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      minHeight: 550,
    },
  },
  featureCardSecondItem: {
    border: `2px solid ${theme.palette.text.primary}`,
    marginTop: 0,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(30),
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        data-aos="fade-up"
        title="Trusted, reliable partner."
        subtitle="Digital Future ME is a licensed and listed company in GCC that follows international employment standards. We are a trusted advisory to some of the biggest brands globally with 100% compliant business practice, offering personalized, flexible service of a boutique firm with best practice of an experienced partner."
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardBase
            noShadow
            liftUp
            className={clsx(classes.featureCard, classes.featureCardFirstItem)}
          >
            <DescriptionListIcon
              title="Data, Cloud, Digital Marketing Consultancy"
              subtitle="To help you quickly transform into a digital champion."
              icon={
                <Icon
                  fontIconClass="fas fa-pen-nib"
                  size="large"
                  fontIconColor={'white'}
                  className={classes.featureIcon}
                />
              }
              titleVariant="h3"
              subtitleVariant="h6"
            />
          </CardBase>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardBase
            noShadow
            liftUp
            className={clsx(classes.featureCard, classes.featureCardSecondItem)}
          >
            <DescriptionListIcon
              title="Temporary Digital Talent Placement"
              subtitle="To support your temporary digital expertise needs."
              icon={
                <Icon
                  fontIconClass="fas fa-layer-group"
                  size="large"
                  fontIconColor={'textPrimary'}
                  className={classes.featureIcon}
                />
              }
              titleVariant="h3"
              subtitleVariant="h6"
            />
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
