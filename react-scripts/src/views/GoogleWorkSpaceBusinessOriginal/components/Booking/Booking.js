import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  TextField,
  Button,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate, TypedText } from 'components/molecules';
import { CardProduct } from 'components/organisms';

const FKTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${colors.blueGrey[50]}`,
    },
    '& .MuiInput-underline:after': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  typed: {
    fontWeight: 'bold',
  },
  listItemAvatar: {
    minWidth: 28,
  },
  formCover: {
    objectFit: 'cover',
    borderBottomLeftRadius: '40%',
  },
  cardProduct: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
  },
}));

const Booking = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <CardProduct
            className={classes.cardProduct}
            withShadow
            liftUp
            mediaContent={
              <Image
                src="https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg"
                srcSet="https://assets.maccarianagency.com/the-front/photos/coworking/place3@2x.jpg 2x"
                alt="Contact cover"
                className={classes.formCover}
                lazy={false}
              />
            }
            cardContent={
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Full Name"
                    label="Full Name *"
                    size="medium"
                    name="fullname"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Email"
                    label="Email *"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Occupation"
                    label="Occupation"
                    size="medium"
                    name="occupation"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    Contact us
                  </Button>
                </Grid>
              </Grid>
            }
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid item>
            <SectionHeader
              title={
                <>
                  <span>
                    Free Consultancy Session.
                    <br />
                    <Typography color="secondary" variant="inherit" component="span">Book a meeting today.</Typography>
                    <br />
                    <Typography color="secondary" variant="inherit" component="span">let's discuss&nbsp;</Typography>
                  </span>
                  <TypedText
                    component="span"
                    variant="h4"
                    color="secondary"
                    className={classes.typed}
                    typedProps={{
                      strings: ['Technical Issues.', 'Pricing.', 'Types of Licences.','Implementation.','Account Setup.','Why Workspace.','Your Questions.'],
                      typeSpeed: 50,
                      loop: true,
                    }}
                  />
                </>
              }
              subtitle="Instantly book a meeting with us to tell us about your needs or doubts. With a quick discussion we will aim to consult and support on any topic related to Google Workspace (G suite)."
              align="left"
              disableGutter
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Booking.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to render
   */
  // data: PropTypes.array.isRequired,
};

export default Booking;
