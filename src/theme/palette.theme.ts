import { Theme } from 'types/theme.types';
import { colors } from './colors.theme';

const palette: Theme.Palette = {
  primary: colors.blue[500],
  secondary: colors.gray[500],
  success: colors.green[500],
  info: colors.cyan[500],
  warning: colors.yellow[500],
  danger: colors.red[500],
  light: colors.gray[100],
  dark: colors.gray[900]
};

export { palette };
