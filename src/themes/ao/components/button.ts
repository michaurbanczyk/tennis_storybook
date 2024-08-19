import { IButton } from "../../types/components/button";
import { color } from "../ao.variables";

export const Button: IButton = {
  primaryBackground: {
    defaultColor: color.primary[300],
    activeColor: color.primary[300],
    hoverColor: color.primary[100],
  },
  secondaryBackground: {
    defaultColor: color.secondary[300],
    activeColor: color.secondary[300],
    hoverColor: color.secondary[100],
  },
};
