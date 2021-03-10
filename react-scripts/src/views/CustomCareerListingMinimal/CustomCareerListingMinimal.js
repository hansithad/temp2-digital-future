import React from 'react';
import {AppBar, Backdrop, CircularProgress, Divider, Drawer, IconButton, Snackbar, Toolbar} from '@material-ui/core';
import { Section, SectionAlternate,CustomContactForm } from 'components/organisms';
import { Articles,Teaser, Features, Hero, CustomJobs, Newsletter } from './components';

import { aricles, features, jobs } from './data';
import ForumIcon from "@material-ui/icons/Forum";
import {makeStyles} from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
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

const CustomCareerListingMinimal = () => {

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
    postData('https://script.google.com/macros/s/AKfycbyTT3r288vZfGaeKGRON7SUZk1HLZdJssRgqfrKvLCou4yPkzrTf8hpGzviT30AI033/exec',
      formValues)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        setOpenLoader(false);
        setOpenSnack(true);
      });
  };

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: new URLSearchParams(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div>
      <Hero/>
      <Section>
        <Teaser/>
      </Section>
      <Section>
        <Articles data={aricles}/>
      </Section>
      <Features data={features}/>
      <SectionAlternate>
        <CustomJobs data={jobs}/>
      </SectionAlternate>
      <Section>
        <Newsletter/>
      </Section>
      <Divider/>
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
          Your feedback saved successfully
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={openLoader} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>

  )
};

export default CustomCareerListingMinimal;
