import { styled, Box, Button } from "@mui/material";
import { unstable_extendSxProp as extendSXProp } from "@mui/system";

const StyledBox = styled(Button)({});

const styles = {
  card: {
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
      backgroundPosition: "right center",
    },
  },
};

export default function SCard(inProps) {
  const { sx, title } = extendSXProp(inProps);
  return <StyledBox sx={{ ...styles.card, ...sx }}>{title}</StyledBox>;
}
