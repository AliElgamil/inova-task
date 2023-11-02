/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, Typography } from "@mui/material";
import useFetchData from "../../hooks/useFetchData";
import CardCourses from "../../components/card";
import { PRODUCT_API } from "../../routes/apiRoutes";

export default function MainView() {
  const { data } = useFetchData<any[]>(
    `${PRODUCT_API}?filter[sub_product_type]=course&filter[product_type]=digital`
  );

  return (
    <Box paddingBlock={"100px"}>
      <Typography
        variant="h2"
        fontSize={"36px"}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        EXPLORE OUR COURSES
      </Typography>

      <Grid container padding={3}>
        {data?.map((item, ind) => (
          <CardCourses item={item} key={ind} />
        ))}
      </Grid>
    </Box>
  );
}
