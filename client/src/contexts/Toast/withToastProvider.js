import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { createPortal } from "react-dom";
import ToastContext from "./ToastContext";
import Toast from "./Toast";

const useStyles = createUseStyles({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  }
});

const generateUEID = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
};

const withToastProvider = Component => {
  const WithToastProvider = props => {
    const classes = useStyles();
    const [toasts, setToasts] = useState([]);
    const add = content => {
      const id = generateUEID();
      setToasts([...toasts, { id, content }]);
    };

    const remove = id => setToasts(toasts.filter(t => t.id !== id));
    console.log(
      document.getElementsByClassName("tdm-wizard-content-container").length
    );

    if (
      document.getElementsByClassName("tdm-wizard-content-container").length > 0
    ) {
      return (
        <ToastContext.Provider value={{ add, remove }}>
          <Component {...props} />
          {createPortal(
            <div className={classes.root}>
              {toasts.map(t => (
                <Toast key={t.id} remove={() => remove(t.id)}>
                  {t.content}
                </Toast>
              ))}
            </div>,
            document.getElementsByClassName("tdm-wizard-content-container")[0]
          )}
        </ToastContext.Provider>
      );
    } else {
      return (
        <ToastContext.Provider value={{ add, remove }}>
          <Component {...props} />
          {createPortal(
            <div className={classes.root}>
              {toasts.map(t => (
                <Toast key={t.id} remove={() => remove(t.id)}>
                  {t.content}
                </Toast>
              ))}
            </div>,
            document.body
          )}
        </ToastContext.Provider>
      );
    }
  };

  return WithToastProvider;
};

export default withToastProvider;
