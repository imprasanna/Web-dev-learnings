import axios from "axios";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Post = () => {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);
  let { postId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${postId}`)
      .then((success) => {
        setTodo(success.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {todo.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {todo.title}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Post;
