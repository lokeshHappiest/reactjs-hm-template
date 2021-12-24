import { styled, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme, myColor }) => ({
  backgroundColor: myColor,
  display: "flex",
  width: "100%",
  height: "50%",
}));

export default function SCard({ myColor }) {
  return <StyledBox myColor={myColor} />;
}
