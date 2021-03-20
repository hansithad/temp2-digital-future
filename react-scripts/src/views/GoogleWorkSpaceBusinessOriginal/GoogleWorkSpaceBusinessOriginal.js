import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, ContactForm, SectionAlternate } from 'components/organisms';
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
}));

const GoogleWorkSpaceBusinessOriginal = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
        <About data={partners} handleBottombarOpen={handleBottombarOpen} />
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
        <MobileFeatures data={mobileFeatures} />
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
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GoogleWorkSpaceBusinessOriginal;