import React from 'react';
import PropTypes from 'prop-types';
import { compareAsc, format } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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
import validate from "validate.js";
import FormHelperText from "@material-ui/core/FormHelperText";

validate.validators.custom = function(value, options, key, attributes) {
  console.log(value);

  /* Phone Test */
  var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  if (filter.test(value)) {
    return null;
  }

  /* Email Test */
  var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (filter.test(value)) {
    return null;
  }

  return ['Please enter valid email or phone'];
}

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

const schema = {
  selectedDate: {
    presence: true
  },
  selectedTime: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    custom: {message:'is not valid'},
    length: {
      maximum: 300,
    },
  }
};

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
  const { postSubmission,className, ...rest } = props;
  const classes = useStyles();

  const [bookingDateError,setBookingDateError] = React.useState(false);
  const [bookingTimeError,setBookingTimeError] = React.useState(false);
  const [contactMethodError,setContactMethodError] = React.useState(false);

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>{
    return formState.touched[field] && formState.errors[field] ? true : false;
  }


  const handleSubmit = (e)=>{





    let dateValue = null;
    let timeValue = null;
    let contactMethodValue = null;
    try {
      dateValue = format(formState.values.selectedDate, 'yyyy-MM-dd');
    }
    catch (e) {
      setBookingDateError(true);

    }

    try {
      timeValue = format(formState.values.selectedTime, 'HH:mm a');
    }
    catch (e) {
      setBookingTimeError(true);
    }

    if(!formState.values.email){
      setContactMethodError(true);
    }


    if(dateValue==null || timeValue==null){
      return false;
    }

    e.preventDefault();
    postSubmission({
      fullName:'',
      email:formState.values.email,
      message:dateValue +' '+ timeValue+'  #consultancy'
    },submitSuccessCallBack);
  };

  const submitSuccessCallBack = ()=>{
    setFormState(formState => ({
      isValid: false,
      values: {},
      touched: {},
      errors: {}

    }));
  };


  const handleDateChange = date => {
    setBookingDateError(false);
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        ['selectedDate']:date,

      },
      touched: {
        ...formState.touched,
        ['selectedDate']: true,
      },
    }));
  };
  const handleTimeChange = time => {
    setBookingTimeError(false);
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        ['selectedTime']:time,

      },
      touched: {
        ...formState.touched,
        ['selectedTime']: true,
      },
    }));
  };




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

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      fullWidth
                      variant="inline"
                      format="yyyy/MM/dd"
                      margin="normal"
                      id="date-picker-inline"
                      label="Select suitable day"
                      value={formState.values.selectedDate || null}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      helperText={hasError('selectedDate') ? 'Please select valid date' : null}
                      error={hasError('selectedDate')}
                    />
                  </MuiPickersUtilsProvider>
                  {bookingDateError && (
                    <FormHelperText error id="selectedDate-error">
                      {'Please select valid date'}
                    </FormHelperText>
                  )}

                </Grid>
                <Grid item xs={12}>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      fullWidth
                      label="Select suitable time"
                      value={formState.values.selectedTime || null}
                      onChange={handleTimeChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                      keyboardIcon={<AccessTimeIcon />}
                    />
                  </MuiPickersUtilsProvider>
                  {bookingTimeError && (
                    <FormHelperText error id="selectedDate-error">
                      {'Please select valid date'}
                    </FormHelperText>
                  )}

                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Your email or phone number"
                    label="Your email or phone number *"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                    helperText={hasError('email') ? 'Please enter valid email or phone' : null}
                    error={hasError('email')}
                    onChange={handleChange}
                    value={formState.values.email || ''}
                  />

                  {/*{contactMethodError && (*/}
                    {/*<FormHelperText error id="email-error">*/}
                      {/*{'Please enter valid value'}*/}
                    {/*</FormHelperText>*/}
                  {/*)}*/}

                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={handleSubmit}
                    disabled={!formState.isValid}
                  >
                    Book a free session
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
