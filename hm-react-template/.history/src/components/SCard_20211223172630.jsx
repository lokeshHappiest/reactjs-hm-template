import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme, myColor }) => ({
  backgroundColor: myColor,
  width: 30,
  height: 30,
}));

export default function SCard() {
  return <StyledBox myColor="pink" />;
}
