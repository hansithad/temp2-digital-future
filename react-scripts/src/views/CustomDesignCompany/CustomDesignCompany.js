import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Divider, Drawer, IconButton, Toolbar,Snackbar,Backdrop, CircularProgress } from '@material-ui/core';
import { Section, SectionAlternate, CustomContactForm } from 'components/organisms';
import MuiAlert from '@material-ui/lab/Alert';

import {
  About,
  Features,
  Hero,
  Integrations,
} from './components';

import { integrations } from './data';
import ForumIcon from "@material-ui/icons/Forum";
import {postData ,BASE_URL } from '../../service/request'

const useStyles = makeStyles(theme => ({
  hero: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-9),
    },
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 100%, ${theme.palette.background.paper} 0%)`,
    [theme.breakpoints.up('md')]: {
      backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
    },
  },
  reviewSection: {
    background: theme.palette.secondary.main,
  },
  sectionSubscription: {
    paddingTop: 0,
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: theme.palette.background.default,
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomDesignCompany = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openLoader, setOpenLoader] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const postSubmission = (formValues)=>{

    setOpenLoader(true);
    handleBottombarClose();
    postData(BASE_URL,formValues)
      .then(data => {
        setOpenLoader(false);
        setOpenSnack(true);
      });
  };


  return (
    <div>
      <Hero data-aos="fade-up" className={classes.hero} />
      <SectionAlternate className={classes.sectionAlternate}>
        <About />
      </SectionAlternate>
      <Section>
        <Integrations data={integrations} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Features />
      </SectionAlternate>
      <Divider />
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <CustomContactForm postSubmission={postSubmission} />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you for contacting us. We will reply shortly
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={openLoader} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default CustomDesignCompany;
