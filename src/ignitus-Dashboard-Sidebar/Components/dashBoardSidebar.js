import React from "react";
import '../Styles/style.scss';
import { withErrorBoundary } from "../../ignitus-Internals";
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

const styles = {
  card: {
    width: '221px',
    background: '#FFFFFF',
    /* shadow */
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
  },
  menuItem: {
    fontFamily: 'Raleway',
    fontSize: '14px',
    padding: '5px 10px',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#C4C4C4',
    },
  },
  root: {
    color: '#000066',
    padding: '5px 2px',
  },
  primary: {
    color: '#000066',
    padding: '5px 2px',
  },
};

class dashboardSidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <List>
            <ListItem classes={{root: classes.menuItem }}>
              <ListItemIcon classes={{root: classes.root}}>
                <ArchiveIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.primary }} primary="Saved" />
            </ListItem>
            <ListItem classes={{root: classes.menuItem }}>
              <ListItemIcon classes={{root: classes.root}}>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.primary }} primary="Liked" />
            </ListItem>
            <ListItem classes={{root: classes.menuItem }}>
              <ListItemIcon classes={{root: classes.root}}>
                <LaunchIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.primary }} primary="Applied" />
            </ListItem>
            <ListItem classes={{root: classes.menuItem }}>
              <ListItemIcon classes={{root: classes.root}}>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.primary }} primary="My Network" />
            </ListItem>
            <ListItem classes={{root: classes.menuItem }}>
              <ListItemIcon classes={{root: classes.root}}>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.primary }} primary="My Mentors" />
            </ListItem>
            <ListItem classes={{root: classes.menuItem }}>
              <ListItemIcon classes={{root: classes.root}}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.primary }} primary="Message" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
        );
      }
    }
    
    export default withErrorBoundary(withStyles(styles)(dashboardSidebar));
