import React, { useEffect } from "react";
import { Paper, Card, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/postActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("mounted");
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Paper>
      <Card>
        <Typography>Hello World!</Typography>
      </Card>
    </Paper>
  );
};

export default Home;
