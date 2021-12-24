import React from "react";
import { Button } from "@mui/material";

const styles = {
  button: {
    width: 289,
    height: 88,
    bgcolor: "#B60E0E",
  },
};

export default function ButtonFig() {
  return (
    <>
      <Button sx={styles.button}>Sign Up</Button>
    </>
  );
}
