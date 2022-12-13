import { Root, classes } from "./Styles"
import {Card, CardActions, CardContent, Typography, CardMedia} from "@mui/material"
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {


return (
  <div>
    <Link to={`/movie/${movie._id}`}>
      <img src={movie.images} alt={movie.name} />
      <h2>{movie.name}</h2>
    </Link>
  </div>
);

    
}

export default MovieCard






























//   return (
//     <Root>
//       <Card className={classes.root}>
//         <div style={{ alignContent: "center", display: "flex",  justifyContent: "space-evenly", maxHeight: "325px"}} >
//           <img src={movie.images} alt={movie.name} />
//         </div>

//         <CardContent>
//           <CardActions disableSpacing>
//             <div className={classes.cardContent}>
//               <Link to={`/movie/${movie._id}`} className={classes.link}>
//                 <Typography gutterBottom variant="body1" component="h2">
//                   {movie.name}
//                 </Typography>
//               </Link>
//             </div>
//           </CardActions>
//         </CardContent>
//       </Card>
//     </Root>
//   );