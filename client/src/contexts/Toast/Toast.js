import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    fontFamily: "Calibri, Arial, sans-serif",
    border: "2px solid transparent",
    backgroundColor: "#a7c539",
    color: "#0F2940",
    maxWidth: "480px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    top: "6em",
    cursor: "pointer",
    zIndex: "1",
    marginLeft: document.getElementsByClassName("sidebar-container-0-2-43")[0]
      .offsetWidth
  },
  "@media (max-width: 1024px)": {
    root: {
      marginLeft: "0"
    }
  },
  container: {
    padding: "16px 24px",
    lineHeight: "1.4"
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    color: "#0F2940",
    fontSize: "16px",
    marginTop: "8px",
    marginRight: "8px",
    cursor: "pointer"
  }
});

const Toast = ({ children, remove }) => {
  const classes = useStyles();
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 800000000;
    const id = setTimeout(() => removeRef.current(), duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>{children}</div>
      <div>
        <button onClick={remove} className={classes.button}>
          X
        </button>
      </div>
    </div>
  );
};
Toast.propTypes = {
  children: PropTypes.string,
  remove: PropTypes.func.isRequired
};

export default Toast;
