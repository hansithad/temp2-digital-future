import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';

import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CustomCardJob } from 'components/organisms';

const CustomJobs = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Some of the talent profiles we love to provide:"
        subtitle={
          <>
            We specialize in providing talent for high-profile positions where a rare set of experience and knowledge is required, e.g.:
          </>
        }
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <CustomCardJob
              variant="outlined"
              liftUp
              jobTitle={item.jobTitle}
              badgeColor={item.color}
              badgeTitle={item.title}
            />
          </Grid>
        ))}
        <Grid item container justify="center" xs={12} data-aos="fade-up">
          <Button variant="contained" color="primary" size="large">
            See all jobs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

CustomJobs.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default CustomJobs;
