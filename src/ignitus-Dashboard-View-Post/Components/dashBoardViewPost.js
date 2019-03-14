import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { withErrorBoundary } from '../../ignitus-Internals';
import { CardActions, Typography, CardContent, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddCircle from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import * as Data from './Constants';
import '../../shared/styles/ignitus-tokens.scss';
import '../Styles/style.scss';

const styles = theme => ({
  card: {
    width: '528px',
    height: '113px',
    display: 'flex',
    margin: '58px 40px',
    borderRadius: '16px',

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
    width: '5px',
    height: '5px',
    color: '#000066',
  },
});

class dashBoardViewPost extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Avatar alt="Bertha" src={Data.Avatar1} className={classes.bigAvatar} />
        <CardContent>
          <Typography component="p">
            <span className={classes.postTitle}>Patricia M. Lane</span> <span className={classes.postTitleText}>has posted an internship</span>
          </Typography>
          <Typography component="p" className={classes.profilePara}>
            Sales and marketing team member<br/>
            Urban International<br/> Spain
          </Typography>
        </CardContent>
        <CardActions className="view-post-action">
          <IconButton aria-label="Add to favorites" className={classes.viewPostIcon}>
            <FavoriteIcon /> <span className={classes.viewPostIconLink}>Like</span>
          </IconButton>
          <IconButton aria-label="Add circle" className={classes.viewPostIcon}>
            <AddCircle /> <span className={classes.viewPostIconLink}>Save</span>
          </IconButton>
          <IconButton aria-label="Share" className={classes.viewPostIcon}>
            <ShareIcon /> <span className={classes.viewPostIconLink}>Share</span>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withErrorBoundary(withStyles(styles)(dashBoardViewPost));
