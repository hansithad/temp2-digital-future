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
                title="Data Strategy"
                subtitle="Our data consulting services start with detailed examination of your existing digital technology to identify specific areas for improvement. We look to eliminate data silos, reduce the time to insights for your employees and increase ROI for performance marketing budgets."
                align="left"
                label="DATA"
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
                title="Cloud Solutions"
                subtitle="Cloud is a new and dynamic trend that helps improve efficiency, agility and reduce cost of your infrastructure. IAAS, PAAS, SAAS - our experts will advise how to use these technologies and set milestones on your way to become cloud-first company of the future."
                align="left"
                label="CLOUD"
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title="Digital Marketing Technology"
                subtitle="In order to determine the ideal MarTech stack for your company, we perform a complete accounting and viability assessment on your overarching business goals and your current tech stack. As a result we set a milestone and work with you on implementing the suggested solutions."
                align="left"
                label="CLOUD MARKETING"
                disableGutter
                data-aos="fade-up"
              />
            </Grid>
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
              label="CLOUD"
              disableGutter
            />
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
