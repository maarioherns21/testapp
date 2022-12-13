import {Grid} from "@mui/material"
import MovieCard from "./MovieCard";
import { Root, classes } from "./Styles";





const Movie = ({ movies, title }) => {
  
  
  return (
    <div>
      <h1>{title}</h1>
      {movies.map((movie) => (
        <div key={movie._id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Movie
















  // return (
  //   <Root>
  //     <main className={classes.content}>
  //       <div className={classes.toolbar} />
  //       <h1>{title}</h1>
  //       <Grid container justify-content="center" spacing={4}>
  //         {movies.map((movie) => (
  //           <Grid item key={movie._id} sm={6} md={4} lg={3}>
  //             <MovieCart movie={movie} />
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </main>
  //   </Root>
  // );