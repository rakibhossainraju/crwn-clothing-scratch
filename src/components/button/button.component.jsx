import {
  ButtonSpinner,
  StyledBaseButton,
  StyledGoogleSignInButton,
  StyledInvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: StyledBaseButton,
    [BUTTON_TYPE_CLASSES.google]: StyledGoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: StyledInvertedButton,
  }[buttonType]);

const Button = ({
  children,
  buttonType,
  isLoading,
  disabled,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      disabled={isLoading ? isLoading : disabled}
      {...otherProps}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
export default Button;
