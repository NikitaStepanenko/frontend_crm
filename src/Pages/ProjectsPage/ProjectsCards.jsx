import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import SinglProjectCard from '../../components/SingleProjectCard/SingleProjectCard.jsx';

function HomeUsersList(props) {
  const { projects } = props;
  return (
    <>
      {projects.map((card) => (
        <Grid item container key={Math.random()} justify="center" xs={12} sm={4} lg={3}>
          <SinglProjectCard card={card} />
        </Grid>
      ))}
    </>
  );
}

export default HomeUsersList;
