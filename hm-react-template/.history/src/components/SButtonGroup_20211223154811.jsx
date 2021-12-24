import React from "react";
import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

export const SButtonGroup = ({ buttons }) => {
  return <Box>{...buttons}</Box>;
};

SButtonGroup.propTypes = {
  buttons: PropTypes.array,
};
