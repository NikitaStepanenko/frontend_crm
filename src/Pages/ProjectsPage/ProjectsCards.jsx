import React from 'react';
import Grid from '@material-ui/core/Grid';
import SinglProjectCard from '../../components/SingleProjectCard/SingleProjectCard.jsx';
import { useSelector } from 'react-redux';

function HomeUsersList() {
  const projects = useSelector(state=>state.projects.projects)
  return (
    <>
      {projects.map((card) => (
        <Grid item container key={Math.random()} justify="center" xs={12} sm={6} lg={3}>
          <SinglProjectCard card={card} />
        </Grid>
      ))}
    </>
  );
}

export default HomeUsersList;
