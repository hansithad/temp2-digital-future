import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate, ContactForm } from 'components/organisms';
import {
  About,
  Features,
  Hero,
  Search,
  Team,
} from './components';

import {
  features,
  team,
} from './data';
import {AppBar, Divider, Drawer, IconButton, Toolbar} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  featuresSection: {
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: '#0c133e',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  aboutSection: {
    background: '#0c133e',
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
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
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
}));

const StaffAugmentation = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div>
      <Hero />
      <div className={classes.featuresSection}>
        <Section>
          <Features data={features} />
        </Section>
      </div>
      <SectionAlternate className={classes.aboutSection}>
        <About />
      </SectionAlternate>
      <Section>
        <Team data={team} />
      </Section>
      <Section>
        <Search />
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

export default StaffAugmentation;
