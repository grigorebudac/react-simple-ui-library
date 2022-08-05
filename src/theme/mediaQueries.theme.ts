import { Theme } from 'types/theme.types';
import { breakpoints } from './breakpoints.theme';

const mediaQueries: Theme.MediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`
};

export { mediaQueries };
