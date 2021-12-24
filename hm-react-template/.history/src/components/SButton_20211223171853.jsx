import * as React from "react";
import Button from "@mui/material/Button";
import { styles } from "../styles/styles";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
const styling = {
  buttonContained: {
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
      backgroundPosition:
        "right center" /* change the direction of the change here */,
      color: "#fff",
      textDecoration: "none",
    },
  },
};

export const SButton = ({
  onClick,
  title,
  mode,
  size,
  normal,
  backgroundColor,
}) => {
  // const otherStyles = primary
  //   ? { ...styles.buttonContained }
  //   : { ...styles.buttonOutline };

  // const sxStyles = normal
  //   ? {
  //       ...styles.button,
  //       backgroundColor: backgroundColor,
  //       "&:hover": {
  //         backgroundColor: backgroundColor,
  //       },
  //     }
  //   : otherStyles;

  return (
    <Button size={size} variant={mode} sx={sxStyles} onClick={onClick}>
      {title}
    </Button>
  );
};

SButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  normal: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

SButton.defaultProps = {
  size: "large",
  title: "Button",
  normal: false,
  backgroundColor: "#1D976C",
};

export default SButton;
