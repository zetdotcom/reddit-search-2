import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import redditAvatar from 'images/reddit-avatar.png';

import './RedditsList.scss';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardActions: {
    // display: 'flex',
    // justifySelf: 'flex-end'
  }
});

function RedditsList() {

  const redditsList = useSelector(state => state.redditsList.reddits)
  const pending = useSelector(state => state.redditsList.pending)
  const classes = useStyles();

  // const thumbnail = thumbnail.includes('http') ? thumbnail : redditAvatar;
  return (
    <div className="reddits-list">
      {pending && <LinearProgress />}

      <div className="reddits-list__list">
        {redditsList.map(item => (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia>
                <img src={item.thumbnail.includes('http') ? item.thumbnail : redditAvatar} alt="" width="100%" height="250px" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.subreddit}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <a href={item.url} target="blank">
                <Button color="primary">
                  See Reddit
              </Button>
              </a>
            </CardActions>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default RedditsList;