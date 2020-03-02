import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectList from './ProjectsList.jsx';
import ProjectCards from './ProjectsCards.jsx';
import ProjectButton from '../../components/Button/ProjectButton.jsx';

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
    justifyContent: 'space-between',
    display: 'flex',
    margin: '0 auto',
    marginTop: '70px',
  },
  h1: {
    fontSize: '40px',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();

  const [projects, setProjects] = useState([{ name: 1, status: 'completed' },
    {
      name: 1, status: 'pending', stack: 'stack', price: 'price', description: 'description',
    },
    { name: 1, status: 'active' },
    { name: 1, status: 'completed' },
    { name: 1, status: 'active' },
    { name: 1, status: 'completed' }]);


  function AddProject(proj) {
    setProjects([...projects, proj]);
  }

  return (
    <>
      <div className={classes.projectsHeader}>
        <h1>Projects</h1>
        <ProjectButton AddProject={AddProject} />
      </div>
      <div className={classes.tableWrapper}>
        {/* <ProjectList classes={classes} /> */}
        <Grid container spacing={3}>
          <ProjectCards cards={projects} />
        </Grid>
      </div>
    </>
  );
}
