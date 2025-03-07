import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles(theme => ({
  labelWrapper: {
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "50%",
    "&:hover $iconContainer": {
      visibility: "visible"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  tooltipLabel: {
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "50%"
  },
  accordionLabel: {
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "50%",
    "&:hover": {
      cursor: "pointer"
    }
  },
  accordionLabelClicked: {
    color: "#002E6D",
    fontWeight: "bold",
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "50%",
    "&:hover": {
      cursor: "pointer"
    },
    fontSmoothing: "antialiased"
  },
  tooltip: {
    color: "rgb(30, 36, 63) !important",
    padding: "15px",
    minWidth: "200px",
    maxWidth: "400px",
    fontFamily: "Arial",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: "bold",
    boxShadow: "0px 0px 8px rgba(0, 46, 109, 0.2)",
    borderRadius: 2,
    "&.show": {
      visibility: "visible !important",
      opacity: "1 !important"
    }
  },
  requiredInputLabel: {
    "&:after": {
      content: '" *"',
      color: theme.colors.warning
    }
  },
  faInfoIcon: {
    color: "#ffffff"
  },
  faCircle: {
    color: "#002E6D"
  },
  iconContainer: {
    visibility: "hidden"
  },
  iconContainerClicked: {
    color: "red"
  }
}));

const ToolTipLabel = ({
  id,
  tooltipContent,
  children,
  code,
  requiredInput,
  disabledInput,
  setShowDescription,
  description,
  showDescription
}) => {
  const classes = useStyles();
  const requiredStyle = requiredInput && classes.requiredInputLabel;
  const disabledStyle = disabledInput;

  const descriptionHandler = e => {
    e.preventDefault();
    setShowDescription(prev => !prev);
  };

  if (code && code.startsWith("UNITS_HABIT")) {
    return (
      <div className={classes.labelWrapper} onClick={descriptionHandler}>
        <label
          onClick={descriptionHandler}
          htmlFor={code}
          className={
            showDescription
              ? description
                ? clsx(
                    classes.accordionLabelClicked,
                    requiredStyle,
                    disabledStyle
                  )
                : clsx(classes.tooltipLabel, requiredStyle, disabledStyle)
              : description
              ? clsx(classes.accordionLabel, requiredStyle, disabledStyle)
              : clsx(classes.tooltipLabel, requiredStyle, disabledStyle)
          }
          data-class={classes.tooltip}
          data-for={id}
          data-tip={tooltipContent}
          data-iscapture="true"
          data-html="true"
        >
          {children}
        </label>
        {description ? (
          <span
            className={clsx("fa-layers fa-fw", classes.iconContainer)}
            style={showDescription ? { visibility: "visible" } : {}}
          >
            <FontAwesomeIcon icon={faCircle} className={classes.faCircle} />
            <FontAwesomeIcon
              icon={faInfo}
              className={classes.faInfoIcon}
              size="2xs"
            />
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={classes.labelWrapper} onClick={descriptionHandler}>
      <label
        htmlFor={code ? code : null}
        className={
          showDescription
            ? description
              ? clsx(
                  classes.accordionLabelClicked,
                  requiredStyle,
                  disabledStyle
                )
              : clsx(classes.tooltipLabel, requiredStyle, disabledStyle)
            : description
            ? clsx(classes.accordionLabel, requiredStyle, disabledStyle)
            : clsx(classes.tooltipLabel, requiredStyle, disabledStyle)
        }
        data-class={classes.tooltip}
        data-for={id}
        data-tip={tooltipContent}
        data-iscapture="true"
        data-html="true"
      >
        {children}
        {tooltipContent &&
          code &&
          !code.startsWith("STRATEGY") &&
          !code.startsWith("PKG") &&
          null}
      </label>
      {description ? (
        <span
          className={clsx("fa-layers fa-fw", classes.iconContainer)}
          style={showDescription ? { visibility: "visible" } : {}}
        >
          <FontAwesomeIcon icon={faCircle} className={classes.faCircle} />
          <FontAwesomeIcon
            icon={faInfo}
            className={classes.faInfoIcon}
            size="2xs"
          />
        </span>
      ) : null}
    </div>
  );
};

ToolTipLabel.propTypes = {
  id: PropTypes.string.isRequired,
  tooltipContent: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  code: PropTypes.string,
  requiredInput: PropTypes.bool,
  disabledInput: PropTypes.bool,
  setShowDescription: PropTypes.func,
  description: PropTypes.string,
  showDescription: PropTypes.bool
};

export default ToolTipLabel;
