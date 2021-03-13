import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, colors } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

const OldTalentFeatures = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Quickly strenghten your team's expertise."
        subtitle="Assign our employee as part time team member of your team"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <CardBase liftUp noShadow variant="outlined">
              <DescriptionListIcon
                icon={
                  <Icon
                    size="large"
                    fontIconClass={item.icon}
                    fontIconColor={colors.yellow[700]}
                  />
                }
                title={item.title}
                subtitle={item.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

OldTalentFeatures.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default OldTalentFeatures;
