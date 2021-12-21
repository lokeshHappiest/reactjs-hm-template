export const styles = {
  button: {
    margin: "10px",
    padding: "15px",
    textTransform: "none",
    color: "white",
    boxShadow: "0 0 10px #eee",
    borderRadius: "20px",
    display: "block",
    "&:hover": {
      borderRadius: "20px",
      color: "black",
      boxShadow: "0 0 10px #eee",
    },
  },
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

  buttonOutline: {
    margin: "10px",
    textTransform: "uppercase",
    backgroundSize: "200% auto",
    color: "#1D976C",
    display: "block",
    border: "1px solid",
    borderRadius: "15px",
    borderColor: "#1D976C",
    p: 2,
    "&:hover": {
      border: "1px solid",
      borderRadius: "15px",
      borderColor: "#1D976C",
      boxShadow: "0 0 10px #eee",
    },
  },
};
