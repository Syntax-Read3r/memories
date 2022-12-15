import React, {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './imgs/memories.png';

import {getPosts} from './actions/posts';
import {useDispatch} from 'react-redux';


// import components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

// import styles
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography variant="h2" align="center" className={classes.heading}>
					Memories
				</Typography>
        <img src={memories} className={classes.image} alt="memories" height={60} />
			</AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container> // Container
      </Grow>
		</Container>
	);
}

export default App;
