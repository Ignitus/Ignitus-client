import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  CardActions,
  Typography,
  CardContent,
  IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RoomIcon from '@material-ui/icons/Room';
import ShareIcon from '@material-ui/icons/Share';
import AddCircle from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as Data from './Constants';
import '../../shared/styles/ignitus-tokens.scss';
import '../Styles/style.scss';

const styles = theme => ({
  card: {
    width: '548px',
    height: '113px',
    display: 'flex',
    margin: '15px auto',
    padding: '10px',
    borderRadius: '16px',
    '&:hover': {
      transform: 'scale(1.1)',
      transitionDuration: '500ms',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  bigAvatar: {
    width: '72px',
    height: '70px',
    margin: '5px 10px',
  },
  postTitle: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontSize: '16px',
    color: '#000066',
  },
  postTitleText: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '16px',
    color: '#353535',
  },
  profilePara: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '13px',
    color: '#000000',
  },
  viewPostIconLink: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    color: '#000066',
    marginLeft: '5px',
  },
  viewPostIcon: {
    height: '3px',
    color: '#000066',
  },
  font14: {
    fontSize: '14px',
  },
  fab: {
    margin: '0px auto',
    backgroundColor: '#000066',
    color: '#ffffff',
    textTransform: 'none',
    fontSize: 12,
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000066',
    },
  },
  viewPostContainer: {
    textAlign: 'left',
    margin: '48px auto',
  },
  viewPostAction: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    marginRight: '5px',

  },
  cardContent: {
    padding: '10px',
  },
  center: {
    textAlign: 'center',
  },
})

const dashBoardViewPost = (props) => {
  const { classes } = props;
  return (
    <div className={classes.viewPostContainer}>
      <div className={classes.center}>
        <Fab
          variant="extended"
          aria-label="Edit"
          size="medium"
          className={classes.fab}
        >
          New Posts
        </Fab>
      </div>
      {Data.viewPostData.map(post => {
        return (
          <Card className={classes.card} key={`card-${post.id}`} id="card-1">
            <Avatar
              alt="Bertha"
              src={post.avatar}
              className={classes.bigAvatar}
            />
            <CardContent className={classes.cardContent}>
              <Typography component="p">
                <span className={classes.postTitle}>
                  {post.name}
                </span>
                <span className={classes.postTitleText}>
                  {post.content}
                </span>
              </Typography>
              <Typography component="p" className={classes.profilePara}>
                {post.role}
                <br />
                {post.company}
                <br />
              </Typography>
              <div>
                <Typography component="p">
                  {post.otherInfo &&  <RoomIcon className={classes.font14} /> }
                  {post.otherInfo && post.otherInfo }
                </Typography>
              </div>
            </CardContent>
            <CardActions className={classes.viewPostAction}>
              <ul>
                <li>
                  <IconButton aria-label="Add to favorites" className={classes.viewPostIcon}>
                    <FavoriteBorderIcon className={classes.font14} />
                    <span className={classes.viewPostIconLink}>
                      Like
                    </span>
                  </IconButton>
                </li>
                <li>
                  <IconButton aria-label="Add circle" className={classes.viewPostIcon}>
                    <AddCircle className={classes.font14} />
                    <span className={classes.viewPostIconLink}>
                      Save
                    </span>
                  </IconButton>
                </li>
                <li>
                  <IconButton aria-label="Share" className={classes.viewPostIcon}>
                    <ShareIcon className={classes.font14} />
                    <span className={classes.viewPostIconLink}>
                      Share
                    </span>
                  </IconButton>
                </li>
              </ul>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}

export default withErrorBoundary(withStyles(styles)(dashBoardViewPost))
