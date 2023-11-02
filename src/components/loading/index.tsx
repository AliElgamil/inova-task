import { Box } from "@mui/system";
import { ReactNode } from "react";

type props = {
  loading: boolean;
  children?: ReactNode;
};

export default function Loading({ loading, children }: props) {
  return loading ? (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeContent: "center",
        bgcolor: "rgb(10 10 10)",
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          animation: "rotate 1s linear infinite",
        }}
        className="loading"
      ></Box>
    </Box>
  ) : (
    children
  );
}
