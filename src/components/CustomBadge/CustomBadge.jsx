import React from 'react';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  badge: {
    padding: '2px 4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#fff',
    marginRight: '10px',
  },
  active: {
    backgroundColor: yellow[800],
  },
  completed: {
    backgroundColor: green[500],
  },
  pending: {
    backgroundColor: red[500],
  },
  tiny: {
    padding: '1px 2px',
  },
  small: {
    padding: '3px 6px',
  },

  medium: {
    padding: '4px 8px',
  },

  large: {
    padding: '5px 10px',
  },
}));


export default function CustomBadge(props) {
  const classes = useStyles();
  const {
    icon, text, size = 'tiny', theme, status, className,
  } = props;

  const badgeClassName = clsx(classes.badge, {
    [classes.active]: status === 'active',
    [classes.completed]: status === 'completed',
    [classes.pending]: status === 'pending',
    [classes.medium]: size === 'medium',
    [classes.large]: size === 'large',
  }, className);


  return (

    <span className={badgeClassName}>
      {text}
    </span>

  );
}
