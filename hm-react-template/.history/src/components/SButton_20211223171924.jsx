import * as React from "react";
import Button from "@mui/material/Button";
import { styles } from "../styles/styles";
import PropTypes from "prop-types";

export const SButton = ({
  onClick,
  title,
  primary,
  size,
  normal,
  backgroundColor,
}) => {
  let mode = normal || primary ? "text" : "outlined";

  const otherStyles = primary
    ? { ...styles.buttonContained }
    : { ...styles.buttonOutline };

  const sxStyles = normal
    ? {
        ...styles.button,
        backgroundColor: backgroundColor,
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }
    : otherStyles;

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
