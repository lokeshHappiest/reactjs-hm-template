import { styled, Box } from "@mui/material";
import { unstable_extendSxProp as extendSXProp } from "@mui/system";

const StyledBox = styled(Box)({});

const styles = {
  card: {
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
      backgroundPosition: "right center",
    },
  },
};

export default function SCard(inProps) {
  const { sx } = extendSXProp(inProps);
  console.log(sx);
  return <StyledBox sx={{ ...styles.card }} />;
}
