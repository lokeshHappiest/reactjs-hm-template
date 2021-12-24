import { styled, Box } from "@mui/material";
import { unstable_extendSxProp as extendSXProp } from "@mui/system";

const StyledBox = styled(Box)({});

const styles = {
  card: {
    backgroundImage:
      "linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 10px #1D976C",
    borderRadius: "20px",
    display: "block",
    fontSize: "20px",
    "&:hover": {
      backgroundPosition: "right center",
    },
  },
};

export default function SCard(inProps) {
  const { sx, title } = extendSXProp(inProps);
  return <StyledBox sx={{ ...styles.card, ...sx }} />;
}
