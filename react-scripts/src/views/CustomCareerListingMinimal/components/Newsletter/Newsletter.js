import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputAdornment, Button, Grid, TextField,
} from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    backgroundSize: 'cover',
    borderRadius: theme.spacing(2),
  },
  textWhite: {
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    maxWidth: 400,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputAdornment-root i': {
      color: 'white !important',
    },
  },

  paddingTop: {
    paddingTop:'8px'
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

const Newsletter = props => {
  const { data, postSubmission,className, ...rest } = props;
  const classes = useStyles();

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
    postSubmission(formState.values,submitSuccessCallBack);
  };

  const submitSuccessCallBack = ()=>{
    setFormState(formState => ({
      isValid: false,
      values: {},
      touched: {},
      errors: {}

    }));
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <>
        <SectionHeader
          title={
            <span className={classes.textWhite}>
              Subscribe To Our Newsletter
            </span>
          }
          subtitle={
            <span className={classes.textWhite}>
              Don't lose a chance to be among the firsts to know about our
              upcoming news and updates.
            </span>
          }
          fadeUp
        />
        <div className={classes.inputContainer}>
          <FormControl
            fullWidth
            variant="outlined"
            data-aos="fade-up"
            className={classes.formControl}
          >
            <OutlinedInput
              helperText={
                hasError('email') ? formState.errors.email[0] : null
              }
              error={hasError('email')}
              onChange={handleChange}
              name="email"
              endAdornment={
                <InputAdornment position="end">
                  <Icon
                    fontIconClass="fas fa-paper-plane"
                    fontIconColor={colors.indigo[900]}
                  />
                </InputAdornment>
              }
              placeholder="Enter your email"
              value={formState.values.email || ''}
            />
            {hasError('email') && (
              <FormHelperText error id="accountId-error">
                {hasError('email') ? formState.errors.email[0] : null}
              </FormHelperText>
            )}
          </FormControl>
        </div>
          <div className={classes.paddingTop}>
            <Grid item container justify="center" xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="secondry"
                size="large"
                disabled={!formState.isValid}
                onClick={handleSubmit}
              >
                Subscribe
              </Button>
            </Grid>
          </div>
        </>
      </Section>
    </div>
  );
};

Newsletter.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Newsletter;
