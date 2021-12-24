import { styled, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme, myColor }) => ({
  backgroundColor: myColor,
  width: 300,
  height: 300,
}));

export default function SCard({ myColor }) {
  return <StyledBox myColor={myColor} />;
}
