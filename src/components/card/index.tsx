/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardCourses(item: any) {
  return (
    <Grid item md={4} sm={6}>
      <Grid className="card">
        <Typography variant="subtitle1" className="card_title">
          {item?.item?.attributes?.name}
        </Typography>

        <Typography>
          Lorem Ipsum is simply a dummy text of the printing and typeset
        </Typography>

        <Link to={`/view-details/${item?.item?.id}`} className="btn">
          See All
        </Link>
      </Grid>
    </Grid>
  );
}
