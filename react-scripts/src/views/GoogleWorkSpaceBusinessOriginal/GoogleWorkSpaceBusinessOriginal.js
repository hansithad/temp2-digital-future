import React ,{useRef}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer, Snackbar, Backdrop, CircularProgress, Grid, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, CustomContactForm, FreeTrialForm,SectionAlternate,CardBase } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import {
  About,
  Features,
  MobileFeatures,
  Pricings,
  CloudFeatures,
  Booking
} from './components';

import {
  partners,
  customizations,
  team,
  mobileFeatures,
  pricings,
  cloudFeatures
} from './data';
import {features} from "../CloudHosting/data";
import {BASE_URL, postData} from "../../service/request";
import MuiAlert from "@material-ui/lab/Alert";
import { Image } from 'components/atoms';
import gcPartnerImage from "../../assets/images/GC-Partner-no_outline-V.png";
import * as colors from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
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
    color: 'white',
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
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const GoogleWorkSpaceBusinessOriginal = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();

  const [openBottombar, setOpenBottombar] = React.useState(false);
  const [openFreeTrialBottombar, setOpenFreeTrialBottombar] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openLoader, setOpenLoader] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };
  const handleFreeTrialBottombarOpen = () => {
    setOpenFreeTrialBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };
  const handleFreeTrialBottombarClose = () => {
    setOpenFreeTrialBottombar(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const postSubmission = (formValues)=>{

    setOpenLoader(true);
    openBottombar ?handleBottombarClose() :handleFreeTrialBottombarClose()
    postData(BASE_URL,formValues)
      .then(data => {
        setOpenLoader(false);
        setOpenSnack(true);
      });
  };


  const bookingPostSubmission = (formValues,callback)=>{
    callback();
    setOpenLoader(true);
    postData(BASE_URL,
      formValues)
      .then(data => {
        setOpenLoader(false);
        setOpenSnack(true);
      });


  };

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <About data={partners} handleBottombarOpen={handleBottombarOpen}
               reference={el1}
               priceClick={()=> scrollToDiv(el3)}
               click={()=> scrollToDiv(el2)} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:20}} narrow>
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
                  <Typography color="secondary" variant="inherit" component="span">Certified Partner</Typography> for implementing Google Workspace (G Suite)
                </span>
              }
              subtitle="High profile individual and company certifications issued by Google confirm our implementation capabilities."
              align={isMd ? 'left' : 'center'}
              disableGutter
              titleVariant="h5"
              subtitleVariant="subtitle1"
            />
          </Grid>
        </Grid>
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <Pricings data={pricings} handleFreeTrialBottombarOpen={handleFreeTrialBottombarOpen} reference={el3} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <Features data={customizations} handleBottombarOpen={handleBottombarOpen} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <MobileFeatures data={mobileFeatures} reference={el2} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <CloudFeatures data={cloudFeatures} handleBottombarOpen={handleBottombarOpen} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <Booking postSubmission={bookingPostSubmission} />
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
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <Drawer
            anchor="bottom"
            open={openFreeTrialBottombar}
            onClose={handleFreeTrialBottombarClose}
          >
            <div className={classes.contactForm}>
              <FreeTrialForm postSubmission={postSubmission} />
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

export default GoogleWorkSpaceBusinessOriginal;
