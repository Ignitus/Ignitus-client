import React from 'react';
import '../Styles/style.scss';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LaunchIcon from '@material-ui/icons/Launch';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SendIcon from '@material-ui/icons/Send';
import { withErrorBoundary } from '../../ignitus-Internals';

const styles = {
  card: {
    width: '221px',
    background: '#FFFFFF',
    /* shadow */
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    margin: '48px auto auto 0px',
  },
  menuItem: {
    padding: '5px 10px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E0E0E0',
    },
  },
  root: {
    color: '#000066',
    padding: '5px 1px',
  },
  primary: {
    color: '#000066',
    padding: '5px 2px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '14px',
  },
};

const dashboardSidebar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <List>
          <ListItem classes={{ root: classes.menuItem }}>
            <ListItemIcon classes={{ root: classes.root }}>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Saved" />
          </ListItem>
          <ListItem classes={{ root: classes.menuItem }}>
            <ListItemIcon classes={{ root: classes.root }}>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Liked" />
          </ListItem>
          <ListItem classes={{ root: classes.menuItem }}>
            <ListItemIcon classes={{ root: classes.root }}>
              <LaunchIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Applied" />
          </ListItem>
          <ListItem classes={{ root: classes.menuItem }}>
            <ListItemIcon classes={{ root: classes.root }}>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="My Network" />
          </ListItem>
          <ListItem classes={{ root: classes.menuItem }}>
            <ListItemIcon classes={{ root: classes.root }}>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="My Mentors" />
          </ListItem>
          <ListItem classes={{ root: classes.menuItem }}>
            <ListItemIcon classes={{ root: classes.root }}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Message" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};


export default withErrorBoundary(withStyles(styles)(dashboardSidebar));
