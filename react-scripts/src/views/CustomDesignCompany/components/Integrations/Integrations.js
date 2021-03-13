import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 50,
  },
}));

const Integrations = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title="Digital Strategy & Implementation"
                subtitle="Our digital transformation consulting services start with detailed examination of your existing digital technology to identify specific areas for improvement. We look to eliminate data silos, reduce the time to insights for your employees, implement online, cloud-based and scalable solutions for your IT, operations, sales, marketing."
                align="left"
                label="DIGITAL TRANSFORMATION"
                ctaGroup={[
                  <LearnMoreLink
                    title="Learn More"
                    href="/digital-transformation"
                    variant="h6"
                  />,
                ]}
                disableGutter
                data-aos="fade-up"
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/progressive-app.svg"
                alt="Integrations"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <CardBase withShadow liftUp>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className={classes.logo}
                        lazy={false}
                      />
                    </CardBase>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                title="Temporary Talent Augmentation"
                subtitle="Need additional digital experts in your team for a fixed term project? Looking for high-profile talent to support the digital transformation? Our comprehensive portfolio of talent sourcing and temporary placing solutions will provide all the essential support you need to quickly strengthen your teams and execute the digital agenda."
                align="left"
                label="DIGITAL TALENT"
                ctaGroup={[
                  <LearnMoreLink
                    title="Learn More"
                    href="/talent-augmentation"
                    variant="h6"
                  />,
                ]}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Integrations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Integrations;
