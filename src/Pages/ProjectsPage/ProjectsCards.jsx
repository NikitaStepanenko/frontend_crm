import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SinglProjectCard from '../../components/SingleProjectCard/SingleProjectCard.jsx';


function HomeUsersList({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <Grid item container key={Math.random()} justify="center" xs={12} sm={6} lg={3}>
          <SinglProjectCard status={card.status} />
        </Grid>
      ))}
    </>
  );
}

export default HomeUsersList;
