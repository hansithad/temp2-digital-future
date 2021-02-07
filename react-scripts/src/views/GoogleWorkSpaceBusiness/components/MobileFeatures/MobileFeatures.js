import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Icon, Button
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import YourLogo from './mailicon.svg'


const useStyles = makeStyles(theme => ({

  paddedSubHead:{
    padding:'18px'
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const MobileFeatures = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, people } = data;

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Why Google Workspace?"
        subtitle={
          <span className={classes.paddedSubHead}>
            Forrester has led a research on a model organization and calculated the impact implementing Google Workspace:171hrs more per user per year spent on actual work 20% less on-demand IT tech support time needed.the risk of data breach decreased 95%
          </span>
          }
        fadeUp
      />


      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/businesswoman.svg"
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="get connected"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Share your memories
                    </Typography>{' '}
                    with your travel buddies
                  </span>
                }
                subtitle="Don't listen to what they say go and see. Travelling with our app is easy. Join the biggest community of travellers."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {items.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
                      {/*<IconAlternate*/}
                        {/*size="small"*/}
                        {/*fontIconClass={item.icon}*/}
                        {/*color={colors.deepOrange}*/}
                      {/*/>*/}
                      <Icon>
                        <img src={YourLogo} height={50} width={50}/>
                      </Icon>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="get connected"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Share your memories
                    </Typography>{' '}
                    with your travel buddies
                  </span>
                }
                subtitle="Don't listen to what they say go and see. Travelling with our app is easy. Join the biggest community of travellers."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {items.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="small"
                        fontIconClass={item.icon}
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/connected-world.svg"
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

MobileFeatures.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default MobileFeatures;