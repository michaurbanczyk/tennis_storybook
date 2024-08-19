import styled from "../../themes/styled";
import { Button as MuiButton } from "@mui/material";

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    prop !== "loading" && prop !== "clickable" && prop !== "transparent",
})(({ theme, color }) => {
  const { Button } = theme.customComponents;
  return {
    "&.MuiButton-root": {
      padding: theme.spacing(2, 3),
    },
    "&.MuiButton-contained": {
      backgroundColor:
        color === "primary"
          ? Button.primaryBackground.defaultColor
          : Button.secondaryBackground.defaultColor,
      color:
        color === "primary" ? "white" : Button.primaryBackground.defaultColor,
      "&:hover": {
        backgroundColor:
          color === "primary"
            ? Button.primaryBackground.hoverColor
            : Button.secondaryBackground.hoverColor,
      },
      "&:active": {
        backgroundColor:
          color === "primary"
            ? Button.primaryBackground.activeColor
            : Button.secondaryBackground.activeColor,
      },
    },
    "&.MuiButton-outlined": {
      color:
        color === "primary"
          ? Button.primaryBackground.defaultColor
          : Button.secondaryBackground.defaultColor,
      "&:hover": {
        color:
          color === "primary"
            ? Button.primaryBackground.hoverColor
            : Button.secondaryBackground.hoverColor,
      },
      "&:active": {
        color:
          color === "primary"
            ? Button.primaryBackground.activeColor
            : Button.secondaryBackground.activeColor,
      },
    },
    "&.MuiButton-text": {
      color:
        color === "primary"
          ? Button.primaryBackground.defaultColor
          : Button.secondaryBackground.defaultColor,
      "&:hover": {
        color:
          color === "primary"
            ? Button.primaryBackground.defaultColor
            : Button.secondaryBackground.defaultColor,
      },
      "&:active": {
        color:
          color === "primary"
            ? Button.primaryBackground.defaultColor
            : Button.secondaryBackground.defaultColor,
      },
    },
  };
});
