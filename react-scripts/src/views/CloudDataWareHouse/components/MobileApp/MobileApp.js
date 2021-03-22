import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

import dashboardExtended  from './dashboard-extended.svg'
import monitor  from './bigq2.png'
import progressiveApp  from './bigq.png'
import checkYellowImage from '../../../../assets/images/check-icon-yellow.svg';


const useStyles = makeStyles(() => ({
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  listItemAvatar: {
    alignSelf: 'flex-start'
  },
  monitorLogo: {
    width:'345px',
    height:'245px'
  },
  centerImage:{
    justifyContent: 'center',
'alignContent': 'center'
  }

}));

const MobileApp = props => {
  const { imageSide,imageUrl,data, className, ...rest } = props;
  const classes = useStyles();

  let matchedImageUrl = null;
  if(imageUrl=='dashboard'){
    matchedImageUrl = dashboardExtended;
  }
  else if(imageUrl=='progressiveApp'){
    matchedImageUrl = progressiveApp;
  }
  else if(imageUrl=='monitor'){
    matchedImageUrl = monitor;
  }
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      { imageSide =='left' && <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justify="center" xs={12} md={6} data-aos="fade-up" className={classes.centerImage}>
          <Image src={matchedImageUrl} className={classes.monitorLogo} />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
          >
            <SectionHeader
              label={data.label}
              title={data.title}
              subtitle={data.subtitle}
              align="left"
              disableGutter
            />
            <Grid container spacing={2}>
              {data.data.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <Avatar
                        src={checkYellowImage}
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary">
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid> }
      { imageSide =='right' && <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
          >
            <SectionHeader
              label={data.label}
              title={data.title}
              subtitle={data.subtitle}
              align="left"
              disableGutter
            />
            <Grid container spacing={2}>
              {data.data.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <Avatar
                        src={checkYellowImage}
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary">
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12} md={6} data-aos="fade-up">
          <Image src={matchedImageUrl} />
        </Grid>
      </Grid> }
    </div>
  );
};

MobileApp.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default MobileApp;
