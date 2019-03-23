import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../../ignitus-Internals';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ChatUsers from './Constants';

const styles = () => ({
  card: {
    position: 'fixed',
    width: '273px',
    maxHeight: '344px',
    bottom: '0px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    overflow: 'auto',
  },
  chatListHeader: {
    backgroundColor: '#000066',
    height: '48px',
    borderRadius: '16px 16px 0px 0px',
  },
  chatListTitle: {
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  listContainer: {
    overflowY: 'scroll',
  },
  listItemContainer: {
    padding: '0px',
  },
  onlineContainer: {
    width: '10px',
    height: '10px',
    backgroundColor: 'green',
    borderRadius: '50%',
  },
})

const dashBoardChatlist = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Chat List"
        classes={{
          title: classes.chatListTitle,
          root: classes.chatListHeader,
        }}
      />
      <CardContent>
        <List className={classes.listContainer}>
          {ChatUsers.map((user) => {
            return (
              <ListItem className={classes.listItemContainer}>
                <Avatar
                  alt={user.name}
                  src={user.avatar}
                  className={classes.bigAvatar}
                />
                <ListItemText primary={user.name} />
                <div className={classes.onlineContainer} />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Card>
  );
};

dashBoardChatlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withErrorBoundary(withStyles(styles)(dashBoardChatlist));
