import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { LearnMoreLink, Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard,CardPricingCustom } from 'components/organisms';

const Pricings = props => {
  const { data, className,handleBottombarOpen, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const useStyles = makeStyles(theme => ({
    fontWeight900: {
      fontWeight: 900,
    },
    oldPrice: {
      fontWeight: 900,
      textDecoration: 'line-through'
    },
  }));
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Simple pricing"
        subtitle="A pay-once license, just for you."
        ctaGroup={[
          <LearnMoreLink title="See what's included" href="#" variant="h6" />,
        ]}
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
            <CardPricingCustom
              variant="outlined"
              withShadow={item.isHighlighted ? true : false}
              title={item.title}
              liftUp
              subtitle={item.subtitle}
              priceComponent={
                <div>
                  <Typography
                    variant="h4"
                    component="span"
                    className={classes.oldPrice}

                  >
                    {item.oldPrice}
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography
                    variant="h4"
                    component="span"
                    color="primary"
                    className={classes.fontWeight900}
                  >
                    {item.price}
                  </Typography>
                  <Typography component="span" variant="subtitle1">
                    {item.priceSuffix}
                  </Typography>
                </div>
              }
              priceSubHeader={
                <Typography
                  variant="subtitle"
                  className="card-pricing-standard__feature-title"
                >
                  {item.priceSubHeader}
                </Typography>
              }
              features={item.features}
              priceSubHeaderProps={{style:{fontSize:'0.8rem'}}}
              featureTitleProps={{style:{fontSize:'0.75rem'}}}
              featureCheckComponent={
                <Icon
                  fontIconClass="far fa-check-circle"
                  fontIconColor={theme.palette.primary.main}
                />
              }
              cta={
                <Button
                  color="primary"
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                  fullWidth
                  size="large"
                  style={{textTransform: 'none'}}
                  onClick={handleBottombarOpen}

                >
                  Free Trial
                </Button>
              }
              disclaimer={item.disclaimer}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Pricings;
