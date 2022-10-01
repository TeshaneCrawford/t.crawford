import React from "react";
import { HeaderProps } from "../../Layout/Header";

const withDefaults = (component: React.FC<HeaderProps>, defaultProps: { description: string; image: string; }) => {
  component.defaultProps = defaultProps;
  return component;
};
export default withDefaults;