/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../Styles/style.scss';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withErrorBoundary } from '../../ignitus-Internals';

const styles = {
  card: {
    width: '276px',
    height: '121px',
    background: 'white',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
  },
  linkContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  menuLink: {
    fontFamily: 'Raleway',
    fontSize: '14px',
    color: '#3D3D3D',
    padding: '5px 10px',
    flex: '1',
    '&:hover': {
      color: '#000066',
      cursor: 'pointer',
    },
  },
  footer: {
    color: '#000066',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    borderBottom: '12px',
    textAlign: 'center',
  },
};

// this.props.classes => {classes}
// eslint-disable-next-line react/prop-types
function dashboardMenuItems({ classes }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="p" className={classes.linkContainer}>
          <a className={classes.menuLink}>About</a>
          <a className={classes.menuLink}>Privacy</a>
          <a className={classes.menuLink}>Careers</a>
          <a className={classes.menuLink}>Help Center</a>
          <a className={classes.menuLink}>Terms & Conditions</a>
        </Typography>
        <Typography component="p" className={classes.footer}>
          &#169; Ignitus 2018
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withErrorBoundary(withStyles(styles)(dashboardMenuItems));
