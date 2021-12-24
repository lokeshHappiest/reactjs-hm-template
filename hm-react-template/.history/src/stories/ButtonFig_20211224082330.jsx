import React from "react";
import { Button } from "@mui/material";

const styles = {
  button: {
    width: 289,
    height: 88,
    bgcolor: "#B60E0E",
    fontSize: "48px",
    fontFamily: "RedRose",
    borderRadius: "46px",
    border: "9px solid  #A6A2A2",
    textTransform: "none",
    color: "#FFF9F9",
    "&:hover": {
      bgcolor: "#B60E0E",
    },
  },
};

export default function ButtonFig() {
  return (
    <>
      <Button variant="raised" sx={styles.button}>
        Sign Up
      </Button>
    </>
  );
}
