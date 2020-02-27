import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectList from './ProjectsList.jsx';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    margin: 'auto',
  },
  tableWrapper: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  projectsHeader: {
    maxWidth: '1370px',
    justifyContent: "space-between",
    display: "flex",
    margin: "0 auto",
    marginTop: '70px',
  },
  h1: {
    fontSize: "40px",
  },  
});

export default function StickyHeadTable() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectsHeader}>
        <h1 className={classes.h1}>Projects</h1>
      </div>
      <div className={classes.tableWrapper}>
        <ProjectList classes={classes} />
      </div>
    </>
  );
}
