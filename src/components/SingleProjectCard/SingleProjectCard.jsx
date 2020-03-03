import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import { DiReact, DiNodejsSmall } from 'react-icons/di';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CustomBadge from '../CustomBadge/CustomBadge.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    margin: '10px',
    backgroundColor: red[500],
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  },
  medium: {
    width: '25px',
    height: '25px',
  },
  lineClamp5: {
    overflow: 'hidden',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
  },
  projectInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
  },
  price: {
    maxHeight: '20px',
  },
}));

export default function RecipeReviewCard({ card }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (

    <Card className={classes.root}>
      {console.log(card)}
      <CardActionArea>
        <div className={classes.cardHeader}>
          <Avatar aria-label="recipe" className={classes.avatar}>
            {card.name[0].toUpperCase()}
            {card.name[1]}
          </Avatar>
          {card.name}
          {/* <FiberManualRecordIcon /> */}
          <CustomBadge text={card.status} icon={<FiberManualRecordSharpIcon />} status={card.status} />
        </div>
        <CardContent>
          <div className={classes.projectInfo}>
            <CustomBadge text={`${card.price}$/day`} theme="price" />
            <div>
              <DiNodejsSmall className={classes.medium} />
              <DiReact className={classes.medium} />
            </div>

          </div>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.lineClamp5}>
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
