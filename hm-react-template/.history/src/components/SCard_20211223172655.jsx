import { styled, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme, myColor }) => ({
  backgroundColor: myColor,
  width: 30,
  height: 30,
}));

export default function SCard({ myColor }) {
  return <StyledBox myColor />;
}
