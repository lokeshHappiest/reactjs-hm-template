import { styled, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage:
    "linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)",
  margin: "10px",
  p: 2,
  textTransform: "none",
  transition: "0.5s",
  backgroundSize: "200% auto",
  color: "white",
  boxShadow: "0 0 10px #1D976C",
  borderRadius: "20px",
  display: "block",
  "&:hover": {
    backgroundPosition:
      "right center" /* change the direction of the change here */,
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function SCard({ myColor }) {
  return (
    <StyledBox
      sx={{
        backgroundImage:
          "linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)",
        margin: "10px",
        p: 2,
        textTransform: "none",
        transition: "0.5s",
        backgroundSize: "200% auto",
        boxShadow: "0 0 10px #1D976C",
        borderRadius: "20px",
        display: "block",
        height: 100,
        width: 100,
        "&:hover": {
          backgroundPosition:
            "right center" /* change the direction of the change here */,
          textDecoration: "none",
        },
      }}
    />
  );
}
