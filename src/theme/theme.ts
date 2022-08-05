import { Theme } from 'types/theme.types';
import { borders } from './borders.theme';
import { borderWidths } from './borderWidths.theme';
import { breakpoints } from './breakpoints.theme';
import { colors } from './colors.theme';
import { fonts } from './fonts.theme';
import { fontSizes } from './fontSizes.theme';
import { fontWeights } from './fontWeights.theme';
import { letterSpacings } from './letterSpacings.theme';
import { lineHeights } from './lineHeights.theme';
import { mediaQueries } from './mediaQueries.theme';
import { palette } from './palette.theme';
import { radii } from './radii.theme';
import { shadows } from './shadows.theme';
import { zIndices } from './zIndices.theme';

export const theme: Theme.Theme = {
  colors,
  palette,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  borders,
  borderWidths,
  radii,
  shadows,
  zIndices,
  breakpoints,
  mediaQueries
};
