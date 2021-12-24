import React from "react";
import { styled, Button } from "@mui/material";

const borderRadius = 15;

const options = {
  shouldForwardProp: (prop) => prop !== "gradientColors",
};

const GradientButton = styled(
  Button,
  options
)(({ theme, gradientColors }) => ({
  border: "5px solid",
  borderImageSlice: 1,
  borderImageSource: `linear-gradient(to left, ${gradientColors.join(",")})`,
}));

const RoundGradientButton = styled(
  Button,
  options
)(({ theme, gradientColors }) => ({
  position: "relative",
  border: "5px solid transparent",
  backgroundClip: "padding-box",
  borderRadius,

  "&:after": {
    position: "absolute",
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    background: `linear-gradient(to left, ${gradientColors.join(",")})`,
    content: '""',
    zIndex: -1,
    borderRadius,
  },
}));

export default function SGradientButton() {
  return <div></div>;
}
