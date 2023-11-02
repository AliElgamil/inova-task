/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { ShoppingCart } from "@mui/icons-material";
import { PRODUCT_API } from "../../routes/apiRoutes";

export default function ViewDetails() {
  const { id } = useParams();

  const { data } = useFetchData<any>(`${PRODUCT_API}/${id}`);

  console.log(data);
  return (
    <Box paddingInline={3} paddingBlock={8}>
      <Box paddingBlock={6} display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="subtitle1" fontWeight={"bold"} fontSize={"30px"}>
            {data?.attributes?.name}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={"bold"} fontSize={"30px"}>
            <Typography variant="caption" fontSize={"20px"}>
              USD
            </Typography>
            {data?.attributes?.price}
          </Typography>

          <Box display={"flex"} gap={2} alignItems={"stretch"}>
            <Box
              component={"button"}
              className="btn"
              width={"150px"}
              paddingBlock={1}
              margin={0}
            >
              Pay
            </Box>
            <Box className="cart_btn">
              <ShoppingCart />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="video">
        <video src={data?.attributes?.course?.video_url} controls></video>
      </Box>
    </Box>
  );
}
