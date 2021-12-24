import { styled, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme, myColor }) => ({
  backgroundColor: myColor,
  display: "flex",
}));

export default function SCard({ myColor }) {
  return <StyledBox myColor={myColor} />;
}
