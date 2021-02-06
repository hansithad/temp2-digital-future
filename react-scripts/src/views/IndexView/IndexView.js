import React from 'react';
import {
  makeStyles,
  useTheme,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Grid,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section, SectionAlternate,ContactForm,CardBase } from 'components/organisms';
import { GetStarted, Features, Reviews,
  QuickStart, Services, Hero, About, Integrations } from './components';
import ForumIcon from "@material-ui/icons/Forum";
import clsx from "clsx";
import gcPartnerImage from '../../assets/images/GC-Partner-no_outline-V.png';
import * as colors from "@material-ui/core/colors";
import {integrations} from "../DesignCompany/data";

const useStyles = makeStyles((theme) => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  cardBase: {
    borderRadius: '35px',
    border: `2px solid ${colors.blueGrey[50]}`,
    maxWidth: 300,
  },

  divider: {
    marginTop: theme.spacing(3),
    width: '100%',
  },

    appBarBottom: {
        top: 'auto',
        bottom: 0,
        background: 'transparent',
        boxShadow: 'none',
    },

    contactForm: {
        padding: theme.spacing(3, 2),
        maxWidth: 800,
        margin: '0 auto',
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


}));

const IndexView = ({ themeMode }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
        setOpenBottombar(true);
    };

  const handleBottombarClose = () => {
        setOpenBottombar(false);
    };

  return (
    <div>
      <Hero themeMode={themeMode} />
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
      <Section>
        <Integrations data={integrations} />
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
      {/*<Services />*/}
      {/*<SectionAlternate className={classes.sectionAlternateNoPaddingTop}>*/}
        {/*<QuickStart />*/}
      {/*</SectionAlternate>*/}
      {/*<SectionAlternate>*/}
        {/*<Features />*/}
      {/*</SectionAlternate>*/}
      {/*<Section>*/}
        {/*<Reviews />*/}
      {/*</Section>*/}
      {/*<Section className={classes.dividerSection}>*/}
        {/*<Divider />*/}
      {/*</Section>*/}
      {/*<Section narrow>*/}
        {/*<GetStarted />*/}
      {/*</Section>*/}
    </div>
  );
};

export default IndexView;
