import { styled, Box } from "@mui/material";
import { unstable_extendSxProp as extendSXProp } from "@mui/system";

const StyledBox = styled(Box)({});

export default function SCard(inProps) {
  const { sx } = extendSXProp(inProps);
  return <StyledBox sx={sx} />;
}
