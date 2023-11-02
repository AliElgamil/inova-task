import { ShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "news",
    route: "/news",
  },
  {
    title: "courses",
    route: "/courses",
  },
  {
    title: "e-book",
    route: "/e-book",
  },
  {
    title: "contact us",
    route: "/contact-us",
  },
];

export default function Header() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            borderBottom: "1px solid rgba(255,255,255,.25)",
          }}
          paddingInline={3}
          paddingBlock={1}
        >
          <Typography className="caption">العربية</Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBlock={2}
          paddingInline={3}
        >
          <Box>
            <img src="./logo.svg" alt="logo" />
          </Box>
          <Box>
            <Typography>
              <Link to={"/"}>Sign In</Link>
              or
              <Link to={"/"}>Sign Up</Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: 1,
          paddingInline: 3,
          backgroundColor: "rgba(255,255,255,.25)",
        }}
      >
        <Box
          component={"ul"}
          sx={{
            display: "flex",
            gap: 3,
            alignContent: "center",
          }}
        >
          {navItems.map((item, ind) => (
            <Box component={"li"} className="nav-item" key={ind}>
              <NavLink to={`${item.route}`}>{item.title}</NavLink>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ShoppingCart />
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            cart
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
