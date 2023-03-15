import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const itemsPerPage = 10;

function Home() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastSliceIndex = itemsPerPage * currentPage;
  const firstSliceIndex = itemsPerPage * (currentPage - 1);

  useEffect(() => {
    async function fetchPosts() {
      // setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setTodos(response.data);
      // setLoading(false);
    }
    fetchPosts();
  }, []);

  console.log("TODOS", todos);

  function handleShowMore(type) {
    if (type === "prev") {
      setCurrentPage((prevState) => prevState - 1);
    } else {
      setCurrentPage((prevState) => prevState + 1);
    }
  }
  return (
    <div>
      {todos.slice(firstSliceIndex, lastSliceIndex).map((todo) => {
        return (
          <Card key={todo.id} sx={{ maxWidth: 345, marginBottom: "2rem" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {todo.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todo.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/posts/${todo.id}`}>
                <Button size="small" color="primary">
                  View More
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Button
          disabled={currentPage === 1}
          sx={{ marginRight: "10px" }}
          variant="contained"
          onClick={() => handleShowMore("prev")}
        >
          Prev
        </Button>
        <Button
          disabled={currentPage === 20}
          variant="contained"
          onClick={() => handleShowMore("next")}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Home;
