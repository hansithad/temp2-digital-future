import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, Button,CardMedia } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import home from "./home-intro.mp4";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxWidth: 100,
  },
}));

const About = props => {
  const { data, reference,click,className, handleBottombarOpen,...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div ref={reference} className={className} data-aos="fade-up" {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 0}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <div>
                  <p>Cloud Based Office Suite.{' '}</p>
                  <span>
                    <Typography component="span" variant="inherit" color="primary">
                      Powered and Used by Google for Remote Work.
                    </Typography>{' '}
                  </span>
                  </div>
                }
                subtitle="Everything your employees need for remote, real-time, efficient collaboration. Available from anywhere, anytime, from any device. With enterprise data security level."
                ctaGroup={[
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    onClick={handleBottombarOpen}
                  >
                    Start a Free Trial
                  </Button>,
                  <Button
                    variant="outlined"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    onClick={click}
                  >
                      SEE WORKSPACE APPS
                  </Button>,
                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
            <CardMedia
                autoPlay
                loop
                muted
                component="video"
                image={home}
                title='Intro'
                className={classes.media}
            />
        </Grid>
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default About;
