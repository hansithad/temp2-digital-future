import React ,{useRef}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer, Snackbar, Backdrop, CircularProgress,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, CustomContactForm, SectionAlternate } from 'components/organisms';
import {
  About,
  Advantages,
  Features,
  Integrations,
  Reviews,
  Team,
  VideoSection,
  MobileFeatures,
  Pricings,
  CloudFeatures
} from './components';

import {
  partners,
  advantages,
  reviews,
  integrations,
  customizations,
  team,
  mobileFeatures,
  pricings,
  cloudFeatures
} from './data';
import {features} from "../CloudHosting/data";
import {BASE_URL, postData} from "../../service/request";
import MuiAlert from "@material-ui/lab/Alert";

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
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const GoogleWorkSpaceBusinessOriginal = () => {
  const classes = useStyles();

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();

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
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
        <About data={partners} handleBottombarOpen={handleBottombarOpen} reference={el1} click={()=> scrollToDiv(el2)} />
        <Section>
          <Divider />
        </Section>
        <Features data={customizations} handleBottombarOpen={handleBottombarOpen} />

        {/*<Team data={team} />*/}
        </>
      </Section>
      <Section style={{paddingTop:20}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <MobileFeatures data={mobileFeatures} reference={el2} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <Pricings data={pricings} handleBottombarOpen={handleBottombarOpen} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <CloudFeatures data={cloudFeatures} handleBottombarOpen={handleBottombarOpen} />
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

export default GoogleWorkSpaceBusinessOriginal;
