export type IButtonColorTypeVariant = {
  defaultColor: string;
  hoverColor: string;
  activeColor: string;
};

export interface IButton {
  primaryBackground: IButtonColorTypeVariant;
  secondaryBackground: IButtonColorTypeVariant;
}
