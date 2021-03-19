import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import designTeam from './design-team.svg'

const useStyles = makeStyles(theme => ({
  playIcon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
    },
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              A fresh look
            </Typography>{' '}
            at digital transformation and the role of talent in it
          </span>
        }
        subtitle="Consulting projects are merely the start of the digital transformation journey. The key is what happens next: the talent responsible for sustaining the long lasting change. Our unique set of services joins these two key elements providing you with a comprehensive toolset you will need through the entire digital transformation journey."

        data-aos="fade-up"
      />
      <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
        <Grid container spacing={4}>

          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Image
                  src={designTeam}
                  alt="Play Video"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
