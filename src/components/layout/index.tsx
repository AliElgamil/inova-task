import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";

type props = {
  children: ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <Box position={"relative"}>{children}</Box>
      <Footer />
    </Box>
  );
}
