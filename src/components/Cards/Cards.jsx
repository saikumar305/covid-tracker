import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from "./Cards.module.css";

const Cards = (props) => {
  const {data} = props
  const {confirmed ,recovered , deaths, lastUpdate} = data
    console.log(confirmed);
    if (!confirmed) return 'loading...'
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3}  className={cx(styles.infected , styles.card)}  >
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start ={0}
                end = {confirmed.value}
                duration={1.5}
                separator = ','
              />
              </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number Of Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}  className={cx(styles.recovered , styles.card)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Recovered</Typography>
            <Typography variant="h5">
              <CountUp
                start ={0}
                end = {recovered.value}
                duration={1.5}
                separator = ','
              /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number Of Recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}  className={cx(styles.deaths , styles.card)}  >
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Deaths</Typography>
            <Typography variant="h5">
            <CountUp
                start ={0}
                end = {deaths.value}
                duration={1.5}
                separator = ','
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number Of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
