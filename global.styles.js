const baseStyles = '@import "shared/styles/_base.scss"';
const variablesStyles = '@import "shared/styles/_variables.scss"';
const breakpointsStyles = '@import "shared/styles/_breakpoints.scss"';
const colorsStyles = '@import "shared/styles/_colors.scss"';
const mixinsStyles = '@import "shared/styles/_mixins.scss"';
const fontsStyles = '@import "shared/styles/_fonts.scss"';

const styles = [
  baseStyles,
  variablesStyles,
  breakpointsStyles,
  colorsStyles,
  mixinsStyles,
  fontsStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
