import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { Image } from 'components/atoms';

import dfLogo  from '../../../../assets/images/digital_future_yellow.svg'
import dfLogoDark  from '../../../../assets/images/digital_future_yellow_white.png'

const useStyles = makeStyles(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100,
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 150,
      height: '100%',
    },
    objectFit: 'cover',
    width: '240px',
    height: '100%',
  },
  darkLogoImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100,
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 150,
      height: '100%',
    },
    objectFit: 'cover',
    width: '240px',
    height: '100%',
  },
}));



const Topbar = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="Digital Future">
          <Image
            className={themeMode==='light'? classes.logoImage: classes.darkLogoImage}
            src={themeMode==='light'?dfLogo:dfLogoDark}
            alt="Digital Future"
            lazy={false}
          />
        </a>
      </div>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
