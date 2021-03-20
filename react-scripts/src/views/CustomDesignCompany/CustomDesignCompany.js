import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Snackbar,
  Backdrop,
  CircularProgress,
  Grid, Typography, useMediaQuery, useTheme
} from '@material-ui/core';
import { Section, SectionAlternate, CustomContactForm,CardBase } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import MuiAlert from '@material-ui/lab/Alert';
import { Image } from 'components/atoms';
import gcPartnerImage from '../../assets/images/GC-Partner-no_outline-V.png';

import {
  About,
  Features,
  Hero,
  Integrations,
  Newsletter,
  MobileApp
} from './components';

import { integrations,mobileapp1, mobileapp2 } from './data';
import ForumIcon from "@material-ui/icons/Forum";
import {postData ,BASE_URL } from '../../service/request'
import * as colors from "@material-ui/core/colors";

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
  },
  cardBase: {
    borderRadius: '35px',
    border: `2px solid ${colors.blueGrey[50]}`,
    maxWidth: 300,
  },
  paddingTop:{
    paddingTop:0
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomDesignCompany = ({ themeMode }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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


  const newsletterSubmission = (formValues,callback)=>{

    setOpenLoader(true);

    //ADDING message
    formValues['message'] = '####NewsLetter request#####';

    postData(BASE_URL,formValues)
      .then(data => {
        callback();
        setOpenLoader(false);
        setOpenSnack(true);
      });
  };

  return (
    <div>
      <Hero data-aos="fade-up" className={classes.hero} />
      <Section narrow>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <Grid container alignItems="flex-start" justify="center">
              <CardBase className={classes.cardBase} withShadow liftUp>
                <>
                  <Image
                    src={gcPartnerImage}
                    alt="..."
                    lazy={false}
                  />

                  <Divider className={classes.divider} />
                </>
              </CardBase>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            sm={6}
            data-aos="fade-up"
          >
            <SectionHeader
              title={
                <span>
                  <Typography color="secondary" variant="inherit" component="span">Certified Partner</Typography> for implementing Google Cloud
                </span>
              }
              subtitle="High profile individual and company qualifications issued by Google confirm our implementation capabilities."
              align={isMd ? 'left' : 'center'}
              disableGutter
              titleVariant="h5"
              subtitleVariant="subtitle1"
            />
          </Grid>
        </Grid>
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <About />
      </SectionAlternate>
      <Section style={{paddingTop:0}}>
        <MobileApp imageUrl='monitor' imageSide='right' data={mobileapp1} />
        <MobileApp imageUrl='progressiveApp' imageSide='left' data={mobileapp2} />
      </Section>
      <Section className={classes.paddingTop}>
        <Integrations data={integrations} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Features />
      </SectionAlternate>
      <Section>
        <Newsletter postSubmission={newsletterSubmission}/>
      </Section>
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
      <Snackbar open={openSnack} autoHideDuration={2000} onClose={handleClose}>
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
