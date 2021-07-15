import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  fullname: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const CustomContactForm = (props) => {
  const classes = useStyles();
  const { postSubmission } = props;

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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('>>>>>> form values');
    console.log(formState.values);
    postSubmission(formState.values);
  };

  return (
    <div className={classes.root}>
      <form
        name="contact-form"
        method="post"
        action="/submition.html?contact-form-submit-success=true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              <strong>How can we support you?</strong>
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center">
              We reply to contact messages ASAP
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Full Name"
              label="Full Name *"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              helperText={
                hasError('fullname') ? formState.errors.fullname[0] : null
              }
              error={hasError('fullname')}
              onChange={handleChange}
              type="text"
              value={formState.values.fullname || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Message"
              label="Message *"
              variant="outlined"
              name="message"
              fullWidth
              helperText={
                hasError('message') ? formState.errors.message[0] : null
              }
              error={hasError('message')}
              onChange={handleChange}
              multiline
              rows={4}
              value={formState.values.message || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Fields that are marked with * sign are required.
            </Typography>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formState.isValid}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

CustomContactForm.propTypes = {

  /**
   * function to handle form submission
   */
  // postSubmission: PropTypes.func(),
};

export default CustomContactForm;
