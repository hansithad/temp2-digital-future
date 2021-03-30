import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  }

};

const FreeTrialForm = (props) => {
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
    formState.touched[field] && formState.errors[field] ? true : false



  const handleSubmit = (e)=>{
    e.preventDefault();
    postSubmission({fullname:'','email':formState.values.email,'message':'#### trial form #####'});
  };

  return (
    <div className={classes.root} style={{paddingBottom:100}}>
      <form
        name="free-trial-form"
        method="post"
        action="/submition.html?contact-form-submit-success=true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              <strong>Start your Free 30 days Trial:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              placeholder="Your current e-mail address"
              label="Your current e-mail address *"
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
          {/*<Grid item xs={12}>*/}
            {/*<FormControl variant="outlined" className={classes.formControl} fullWidth>*/}
              {/*<InputLabel id="num-of-employee-lb">Number of employees in your company *</InputLabel>*/}
              {/*<Select*/}
                {/*labelId="num-of-employee-label"*/}
                {/*id="num-of-employee-select-outlined"*/}
                {/*label="Number of employees in your company *"*/}
                {/*name="numOfEmp"*/}
                {/*fullWidth*/}
                {/*helperText={hasError('numOfEmp') ? 'Number of employees is required' : null}*/}
                {/*error={hasError('numOfEmp')}*/}
                {/*onChange={handleChange}*/}
                {/*value={formState.values.numOfEmp || ''}*/}
              {/*>*/}
                {/*<MenuItem value="">*/}
                  {/*<em>None</em>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem value={'1 Employee'}>It's just me</MenuItem>*/}
                {/*<MenuItem value={'2-10 Employees'}>2-10 Employees</MenuItem>*/}
                {/*<MenuItem value={'11-30 Employees'}>11-30 Employees</MenuItem>*/}
                {/*<MenuItem value={'31-100 Employees'}>31-100 Employees</MenuItem>*/}
                {/*<MenuItem value={'Above 100 Employees'}>Above 100 Employees</MenuItem>*/}
              {/*</Select>*/}
              {/*{hasError('numOfEmp') && (*/}
                {/*<FormHelperText error id="numOfEmp-error">*/}
                  {/*{hasError('numOfEmp') ? 'Number of employees is required' : null}*/}
                {/*</FormHelperText>*/}
              {/*)}*/}
            {/*</FormControl>*/}
          {/*</Grid>*/}
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
              fullWidth
            >
              Start Free Trial
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

FreeTrialForm.propTypes = {

  /**
   * function to handle form submission
   */
  // postSubmission: PropTypes.func(),
};

export default FreeTrialForm;
