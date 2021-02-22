import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ScatterPlot } from '@material-ui/icons';

const useStyles = makeStyles({
  
  root: {
    '&:hover':{
    
      transform:'scale(1.05)',
      transitionDuration:'0.5s',
      WebkitTransition:'transform 2s ease-in-out',
    
      
    },
    WebkitTransition:'transform 2s ease-in-out',
    transitionDuration:'0.5s',
    transitionTimingFunction: 'ease-in',
    width: 280,
    textAlign:'center',
    margin:'10px 0'
  },
  media: {
    height: 180,
  },
  noUnderline:{
    fontFamily:'PT Sans',
    textDecoration:'none',
    transitionDuration:'0.5s',
    transitionTimingFunction: 'ease-in',
  }
});

export default function MediaCard({course}) {
  const classes = useStyles();

  return (
    <a className={classes.noUnderline} target="_blank" rel="noreferrer" href={course.link}> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={course.imageUrl}
          title={course.name}
        />
        <CardContent>
          <Typography style={{fontFamily:'PT Sans',fontWeight:'510',color:'#212121',fontSize:'19px'}} gutterBottom variant="h5" component="h2">
            {course.name}
          </Typography>
          <Typography style={{fontFamily:'PT Sans',color:'#757575',fontSize:'15px'}} variant="body2" color="textSecondary" component="p">
            {course.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </a>
  );
}